import "./index.css";
import { useEffect } from "react";

import { useAuth } from "@/hooks/contexts/useAuth";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "./lib/supabase";

export default function App() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (user) {
        // router.replace('/home');
      }
    }
  }, [loading, user]);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if ( user ) {
    // If user exists, we return null since router.replace will take over
    return <div>Logged in!</div>;
  }

  return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
}
