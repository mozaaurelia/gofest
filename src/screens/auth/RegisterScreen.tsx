import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";
import TicketIcon from "@/components/ticket-icon";
import AuthGlowBg from "@/components/auth/auth-glow-bg";
import AuthInput from "@/components/auth/auth-input";
import AuthDatePicker from "@/components/auth/auth-date-picker";
import AuthGenderSelect from "@/components/auth/auth-gender-select";
import AuthButton from "@/components/auth/auth-button";
import AuthSwitchLink from "@/components/auth/auth-switch-link";
import { gfColors } from "@/constants/gf-theme";

export default function RegisterScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState({ day: "", month: "", year: "" });
  const [gender, setGender] = useState("");
  const router = useRouter();

  const canSubmit =
    firstName.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    birthDate.day.trim() !== "" &&
    birthDate.month.trim() !== "" &&
    birthDate.year.trim() !== "" &&
    gender !== "";

  return (
    <SafeAreaView style={styles.safe}>
      <AuthGlowBg />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInDown.duration(500).delay(50)} style={styles.logoRow}>
          <TicketIcon size={30} />
          <Text style={styles.wordmark}>Go fest!</Text>
        </Animated.View>

        <Animated.Text entering={FadeInDown.duration(500).delay(120)} style={styles.title}>
          Create a new account
        </Animated.Text>
        <Animated.Text entering={FadeInDown.duration(500).delay(180)} style={styles.subtitle}>
          Join now and find your favorite concerts
        </Animated.Text>

        <Animated.View entering={FadeInDown.duration(500).delay(260)} style={styles.form}>
          <View style={styles.nameRow}>
            <View style={styles.nameField}>
              <AuthInput label="First Name *" icon="user" placeholder="First name" value={firstName} onChangeText={setFirstName} />
            </View>
            <View style={styles.nameField}>
              <AuthInput label="Last Name" icon="user" placeholder="Last name" value={lastName} onChangeText={setLastName} />
            </View>
          </View>

          <AuthInput label="Email *" icon="mail" placeholder="you@email.com" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
          <AuthInput label="Password *" icon="lock" isPassword placeholder="Password" value={password} onChangeText={setPassword} />

          <AuthDatePicker label="Date of Birth *" onValueChange={setBirthDate} />
          <AuthGenderSelect label="Gender *" value={gender} onChange={setGender} />

          <View style={{ marginTop: 4 }}>
            <AuthButton label="Sign Up" onPress={() => router.replace("/(tabs)" as any)} disabled={!canSubmit} />
          </View>
        </Animated.View>

        <Animated.View entering={FadeInDown.duration(500).delay(340)}>
          <AuthSwitchLink question="Already have an account?" actionLabel="Sign in here" href="/auth/login" />
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: gfColors.bg },
  content: { flexGrow: 1, justifyContent: "center", paddingHorizontal: 28, paddingVertical: 40 },
  logoRow: { flexDirection: "row", alignItems: "center", gap: 8, alignSelf: "center", marginBottom: 28 },
  wordmark: { fontSize: 20, fontWeight: "800", color: gfColors.text },
  title: { fontSize: 24, fontWeight: "800", color: gfColors.text, textAlign: "center" },
  subtitle: { fontSize: 13, color: gfColors.textMuted, textAlign: "center", marginTop: 6, marginBottom: 28 },
  form: {},
  nameRow: { flexDirection: "row", gap: 10 },
  nameField: { flex: 1 },
});
