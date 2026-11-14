import React, { createContext, useCallback, useContext, useState } from "react";
import { DEFAULT_PROFILE_NAME, loadSavedName, saveName } from "@/services/profile-name";

type ProfileNameContextType = {
  name: string;
  updateName: (name: string) => void;
};

const ProfileNameContext = createContext<ProfileNameContextType>({
  name: DEFAULT_PROFILE_NAME,
  updateName: () => {},
});

export function ProfileNameProvider({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState(() => loadSavedName());

  const updateName = useCallback((next: string) => {
    const cleaned = next.trim();
    if (!cleaned) return;
    saveName(cleaned);
    setName(cleaned);
  }, []);

  return <ProfileNameContext.Provider value={{ name, updateName }}>{children}</ProfileNameContext.Provider>;
}

export function useProfileName() {
  return useContext(ProfileNameContext);
}
