import SignOutButton from "@/components/profile/SignOutButton";

import { useUser } from "@/hooks/useUser";

export default function Profile() {
  const { user, loading, updateUserInfo } = useUser();

  const username = user ? user.username : "Guest";

  return (
    <div>
      <h2>{username}</h2>
      <SignOutButton />
    </div>
  );
}
