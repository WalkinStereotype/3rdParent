import React, { createContext, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Session, User } from '@supabase/supabase-js';

import { updateEmail } from '@/services/AuthService';

type AuthContextType = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  update_email: ((email: string) => Promise<boolean>) | null;
};

export const AuthContext = createContext<AuthContextType> ({
  session: null,
  user: null,
  loading: true,
  update_email: null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };
    initAuth();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const update_email = async (email: string) => {
    if (!session) return false;

    const result = await updateEmail(email);

    if (result) {
      setSession({ ...session, user: { ...session.user, email } });
      return true;
    }
    
    return false;
  }

  return (
    <AuthContext.Provider
      value={{
        session,
        user: session?.user ?? null,
        loading,
        update_email,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};