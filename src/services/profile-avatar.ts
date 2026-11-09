import * as ImagePicker from "expo-image-picker";
import { Directory, File, Paths } from "expo-file-system";
import { Platform } from "react-native";

const AVATAR_PREFIX = "avatar-";

let cachedAvatarDir: Directory | null | undefined;

function getAvatarDir(): Directory | null {
  if (Platform.OS === "web") return null;
  if (cachedAvatarDir === undefined) {
    cachedAvatarDir = new Directory(Paths.document, "profile");
  }
  return cachedAvatarDir;
}

export type AvatarPickResult =
  | { status: "saved"; uri: string }
  | { status: "canceled" }
  | { status: "denied" };

function avatarFiles(): File[] {
  const avatarDir = getAvatarDir();
  if (!avatarDir || !avatarDir.exists) return [];
  return avatarDir.list().filter(
    (entry): entry is File => entry instanceof File && entry.name.startsWith(AVATAR_PREFIX)
  );
}

export function loadSavedAvatar(): string | null {
  const files = avatarFiles();
  if (files.length === 0) return null;
  const latest = files.sort((a, b) => b.name.localeCompare(a.name))[0];
  return latest.uri;
}

export function removeSavedAvatar(): void {
  avatarFiles().forEach((file) => {
    if (file.exists) file.delete();
  });
}

async function persistAvatar(asset: ImagePicker.ImagePickerAsset): Promise<string> {
  const avatarDir = getAvatarDir();
  if (!avatarDir) return asset.uri;
  if (!avatarDir.exists) avatarDir.create({ intermediates: true });
  removeSavedAvatar();

  const extension = asset.uri.match(/\.[a-zA-Z0-9]+$/)?.[0] ?? ".jpg";
  const destination = new File(avatarDir, `${AVATAR_PREFIX}${Date.now()}${extension}`);
  await new File(asset.uri).copy(destination);

  return destination.uri;
}

const pickerOptions: ImagePicker.ImagePickerOptions = {
  mediaTypes: ["images"],
  allowsEditing: true,
  aspect: [1, 1],
  quality: 0.8,
};

export async function pickAvatarFromLibraryAsync(): Promise<AvatarPickResult> {
  const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!permission.granted) return { status: "denied" };

  const result = await ImagePicker.launchImageLibraryAsync(pickerOptions);
  if (result.canceled || !result.assets[0]) return { status: "canceled" };

  return { status: "saved", uri: await persistAvatar(result.assets[0]) };
}

export async function takeAvatarPhotoAsync(): Promise<AvatarPickResult> {
  const permission = await ImagePicker.requestCameraPermissionsAsync();
  if (!permission.granted) return { status: "denied" };

  const result = await ImagePicker.launchCameraAsync({
    ...pickerOptions,
    cameraType: ImagePicker.CameraType.front,
  });
  if (result.canceled || !result.assets[0]) return { status: "canceled" };

  return { status: "saved", uri: await persistAvatar(result.assets[0]) };
}
