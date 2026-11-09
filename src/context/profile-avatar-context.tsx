import React, { createContext, useCallback, useContext, useState } from "react";
import {
  AvatarPickResult,
  loadSavedAvatar,
  pickAvatarFromLibraryAsync,
  removeSavedAvatar,
  takeAvatarPhotoAsync,
} from "@/services/profile-avatar";

type ProfileAvatarContextType = {
  avatarUri: string | null;
  pickFromLibrary: () => Promise<AvatarPickResult>;
  takePhoto: () => Promise<AvatarPickResult>;
  removeAvatar: () => void;
};

const ProfileAvatarContext = createContext<ProfileAvatarContextType>({
  avatarUri: null,
  pickFromLibrary: async () => ({ status: "canceled" }),
  takePhoto: async () => ({ status: "canceled" }),
  removeAvatar: () => {},
});

export function ProfileAvatarProvider({ children }: { children: React.ReactNode }) {
  const [avatarUri, setAvatarUri] = useState<string | null>(() => loadSavedAvatar());

  const pickFromLibrary = useCallback(async () => {
    const result = await pickAvatarFromLibraryAsync();
    if (result.status === "saved") setAvatarUri(result.uri);
    return result;
  }, []);

  const takePhoto = useCallback(async () => {
    const result = await takeAvatarPhotoAsync();
    if (result.status === "saved") setAvatarUri(result.uri);
    return result;
  }, []);

  const removeAvatar = useCallback(() => {
    removeSavedAvatar();
    setAvatarUri(null);
  }, []);

  return (
    <ProfileAvatarContext.Provider value={{ avatarUri, pickFromLibrary, takePhoto, removeAvatar }}>
      {children}
    </ProfileAvatarContext.Provider>
  );
}

export function useProfileAvatar() {
  return useContext(ProfileAvatarContext);
}
