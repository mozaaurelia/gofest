import React, { createContext, useCallback, useContext, useState } from "react";
import { type AuthUser, clearSession, loadSession, saveSession } from "@/services/auth";

type AuthContextType = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  signIn: (email: string) => void;
  signUp: (user: AuthUser) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => loadSession());

  const signIn = useCallback((email: string) => {
    const next: AuthUser = { email: email.trim() };
    saveSession(next);
    setUser(next);
  }, []);

  const signUp = useCallback((next: AuthUser) => {
    const account: AuthUser = {
      email: next.email.trim(),
      firstName: next.firstName?.trim() || undefined,
      lastName: next.lastName?.trim() || undefined,
    };
    saveSession(account);
    setUser(account);
  }, []);

  const signOut = useCallback(() => {
    clearSession();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: user !== null, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
