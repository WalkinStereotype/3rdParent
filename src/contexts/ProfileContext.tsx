import React, { createContext, useEffect, useState } from "react";

import { Profile, UserInfoUpdate } from "@/utils/schema";
import { getProfile, updateProfile } from "@/services/ProfileService";

import { useSharedAsyncLoader } from "@/hooks/asyncLoaders/useSharedAsyncLoader";
import { useAuth } from "@/hooks/contexts/useAuth";

type ProfileContextType = {
  profile: Profile | null;
  loading: boolean;
  reload_profile: (() => Promise<void>) | null;
  update_profile: ((newProfile: Profile) => Promise<boolean>) | null;
};

export const ProfileContext = createContext<ProfileContextType>({
  profile: null,
  loading: true,
  reload_profile: null,
  update_profile: null,
});

export const ProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loadingCount, setLoadingCount] = useState(0);
  const loading = loadingCount > 0;
  const setLoading = (v: boolean) => setLoadingCount((c) => (v ? 1 : -1));

  const { user } = useAuth();
  const userId = user?.id;

  const load_profile = useSharedAsyncLoader(async () => {
    if (!userId) return;
    const result = await getProfile(userId);
    setProfile(result);
  }, setLoading);

  const update_profile = async (newProfile: Profile) => {
    if (!userId) return false;

    const old = profile;
    setProfile(newProfile);

    const data = await updateProfile(newProfile);

    if (!data) {
      console.error("update_profile failed — rolling back");
      setProfile(old);
      return false;
    }

    return true;
  };

  useEffect(() => {
    load_profile();
  }, [userId]);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        loading,
        reload_profile: load_profile,
        update_profile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
