import { Directory, File, Paths } from "expo-file-system";
import { Platform } from "react-native";

const SESSION_KEY = "gofest.auth.session";
const SESSION_FILE = "auth-session.txt";
const ONBOARDING_KEY = "gofest.onboarding.seen";
const ONBOARDING_FILE = "onboarding-seen.txt";

export type AuthUser = {
  email: string;
  firstName?: string;
  lastName?: string;
};

let cachedDir: Directory | null | undefined;

function getAuthDir(): Directory | null {
  if (Platform.OS === "web") return null;
  if (cachedDir === undefined) {
    cachedDir = new Directory(Paths.document, "auth");
  }
  return cachedDir;
}

function readFile(name: string): string | null {
  try {
    if (Platform.OS === "web") return null;

    const dir = getAuthDir();
    if (!dir) return null;
    const file = new File(dir, name);
    if (!file.exists) return null;
    return file.textSync();
  } catch {
    return null;
  }
}

function writeFile(name: string, value: string): void {
  try {
    if (Platform.OS === "web") return;

    const dir = getAuthDir();
    if (!dir) return;
    if (!dir.exists) dir.create({ intermediates: true });
    const file = new File(dir, name);
    if (file.exists) file.delete();
    file.write(value);
  } catch {
    // ignore storage errors — state still updates in memory
  }
}

function deleteFile(name: string): void {
  try {
    if (Platform.OS === "web") return;

    const dir = getAuthDir();
    if (!dir) return;
    const file = new File(dir, name);
    if (file.exists) file.delete();
  } catch {
    // ignore storage errors
  }
}

export function loadSession(): AuthUser | null {
  try {
    const raw =
      Platform.OS === "web"
        ? globalThis.localStorage?.getItem(SESSION_KEY) ?? null
        : readFile(SESSION_FILE);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<AuthUser>;
    if (!parsed || typeof parsed.email !== "string" || !parsed.email.trim()) return null;

    return {
      email: parsed.email.trim(),
      firstName: typeof parsed.firstName === "string" ? parsed.firstName : undefined,
      lastName: typeof parsed.lastName === "string" ? parsed.lastName : undefined,
    };
  } catch {
    return null;
  }
}

export function saveSession(user: AuthUser): void {
  const payload = JSON.stringify(user);
  if (Platform.OS === "web") {
    globalThis.localStorage?.setItem(SESSION_KEY, payload);
    return;
  }
  writeFile(SESSION_FILE, payload);
}

export function clearSession(): void {
  if (Platform.OS === "web") {
    globalThis.localStorage?.removeItem(SESSION_KEY);
    return;
  }
  deleteFile(SESSION_FILE);
}

export function hasSeenOnboarding(): boolean {
  if (Platform.OS === "web") {
    return globalThis.localStorage?.getItem(ONBOARDING_KEY) === "1";
  }
  return readFile(ONBOARDING_FILE)?.trim() === "1";
}

export function markOnboardingSeen(): void {
  if (Platform.OS === "web") {
    globalThis.localStorage?.setItem(ONBOARDING_KEY, "1");
    return;
  }
  writeFile(ONBOARDING_FILE, "1");
}
