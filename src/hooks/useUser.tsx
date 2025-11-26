import { useAuth } from "@/hooks/contexts/useAuth";
import { useProfile } from "@/hooks/contexts/useProfile";

import { Profile, UserInfo, UserInfoUpdate } from "@/utils/schema";

export const useUser = () => {
  const { user, loading: authLoading, update_email } = useAuth();
  const {
    profile,
    loading: profileLoading,
    update_profile,
    reload_profile,
  } = useProfile();

  const loading = authLoading || profileLoading;

  const userInfo: UserInfo | null =
    user && profile
      ? ({ id: user.id, email: user.email, username: profile.username } as UserInfo)
      : null;

  // Update both email & username together
  const updateUserInfo = async (updates: UserInfoUpdate) => {
    if (!user) return { success: false, error: "No user logged in" };
    if (!update_email) return { success: false, error: "No update_email function defined"};
    if (!update_profile) return { success: false, error: "No update_profile function defined"};
    if (!reload_profile) return { success: false, error: "No reload_profile function defined"};

    const results: boolean[] = [];

    // Update email if provided
    if (updates.email !== undefined) {
      const res = await update_email(updates.email);
      results.push(res);
    }

    // Update username if provided
    if (updates.username !== undefined) {
      const res = await update_profile({ id: user.id, username: updates.username} as Profile);
      results.push(res);
    }

    // Reload profile to keep state fresh
    await reload_profile();

    // Determine overall success
    const success = results.every((r) => r);

    return success;
  };

  return { user: userInfo, loading, updateUserInfo };
};
