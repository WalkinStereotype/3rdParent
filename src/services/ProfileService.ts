import { Profile, } from "@/utils/schema";
import {
  getProfile as dbGetProfile,
  updateProfile as dbUpdateProfile,
} from "@/supabase-api/profiles";

export const getProfile = async (id: string): Promise<Profile | null> => {
  return await dbGetProfile(id);
};

export const updateProfile = async (
  profile: Profile
): Promise<boolean> => {
  return await dbUpdateProfile(profile);
};