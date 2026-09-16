import React, { useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

import {
  ProfileHeader,
  ProfileAvatar,
  ProfileInfo,
  ProfileStats,
  ProfileActions,
  ProfileTabs,
  PortfolioGrid,
} from "@/components/profile";
import type { PortfolioItem, ProfileTabKey } from "@/components/profile/types";

const MOCK_ITEMS: PortfolioItem[] = [
  { id: "1", bg: "#CDE9B0" },
  { id: "2", bg: "#BFD99B" },
  { id: "3", bg: "#FFD18A" },
  { id: "4", bg: "#1E2A4A" },
];

export default function ProfileScreen() {
  const [tab, setTab] = useState<ProfileTabKey>("portfolio");
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[styles.contentContainer, { paddingBottom: 110 + insets.bottom }]}
        showsVerticalScrollIndicator={false}
      >
        {/* Card wrapper to mimic phone card in reference */}
        <View style={styles.phoneCard}>
          <ProfileHeader>
            <ProfileAvatar name="Tima bouzid" size={108} />
          </ProfileHeader>

          <ProfileInfo name="Tima bouzid" role="Web Designer" location="Morocco" />

          <ProfileStats
            stats={[
              { value: "20.7K", label: "Likes" },
              { value: "3.6K", label: "Followers" },
              { value: "1.2K", label: "Following" },
            ]}
          />

          <ProfileActions
            onEdit={() => Alert.alert("Edit profile", "Fitur edit profile segera hadir")}
            onShare={() => Alert.alert("Share", "Fitur share segera hadir")}
          />

          <ProfileTabs active={tab} onChange={setTab} />

          <PortfolioGrid activeTab={tab} items={MOCK_ITEMS} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F8F8FB",
  },
  scroll: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 12,
    paddingTop: 8,
    alignItems: "center",
  },
  phoneCard: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    overflow: "hidden",
    // subtle phone shadow like in reference image
    shadowColor: "#1A1E2E",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 8,
  },
});
