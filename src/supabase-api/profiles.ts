import { supabase } from "@/lib/supabase";
import { Profile } from "@/utils/schema";
import { UserInfoUpdate } from "@/utils/schema";

export const getProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, username")
    .eq("id", userId)
    .single();

  if (error || !data) {
    console.error("Error fetching profile:", error?.message);
    return null;
  }
  return data as Profile;
};

export const updateProfile = async (profile: Profile) => {
  const { error } = await supabase
    .from("profiles")
    .update(profile)
    .eq("id", profile.id);
  
  if (error){
    console.error("Error updating profile:", error?.message);
    return false;
  }

  return true;

};

