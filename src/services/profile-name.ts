import { Directory, File, Paths } from "expo-file-system";
import { Platform } from "react-native";

const STORAGE_KEY = "gofest.profile.name";
const FILE_NAME = "profile-name.txt";

export const DEFAULT_PROFILE_NAME = "moza";

let cachedDir: Directory | null | undefined;

function getProfileDir(): Directory | null {
  if (Platform.OS === "web") return null;
  if (cachedDir === undefined) {
    cachedDir = new Directory(Paths.document, "profile");
  }
  return cachedDir;
}

export function loadSavedName(): string {
  try {
    if (Platform.OS === "web") {
      const stored = globalThis.localStorage?.getItem(STORAGE_KEY);
      return stored?.trim() || DEFAULT_PROFILE_NAME;
    }

    const dir = getProfileDir();
    if (!dir) return DEFAULT_PROFILE_NAME;
    const file = new File(dir, FILE_NAME);
    if (!file.exists) return DEFAULT_PROFILE_NAME;
    return file.textSync().trim() || DEFAULT_PROFILE_NAME;
  } catch {
    return DEFAULT_PROFILE_NAME;
  }
}

export function saveName(name: string): void {
  const cleaned = name.trim();
  if (!cleaned) return;

  try {
    if (Platform.OS === "web") {
      globalThis.localStorage?.setItem(STORAGE_KEY, cleaned);
      return;
    }

    const dir = getProfileDir();
    if (!dir) return;
    if (!dir.exists) dir.create({ intermediates: true });
    const file = new File(dir, FILE_NAME);
    if (file.exists) file.delete();
    file.write(cleaned);
  } catch {
    // ignore storage errors — name still updates in memory
  }
}
