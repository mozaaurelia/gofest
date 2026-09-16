import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PortfolioCard } from "./PortfolioCard";
import type { PortfolioItem, ProfileTabKey } from "./types";

type Props = {
  activeTab: ProfileTabKey;
  items: PortfolioItem[];
};

function EmptyState({ label }: { label: string }) {
  return (
    <View style={styles.emptyWrap}>
      <Text style={styles.emptyTitle}>{label}</Text>
      <Text style={styles.emptySubtitle}>Konten akan muncul di sini</Text>
    </View>
  );
}

export function PortfolioGrid({ activeTab, items }: Props) {
  if (activeTab === "about") {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.paragraph}>
          Web Designer dari Morocco. Fokus di UI/UX dan product design. Suka eksplor warna pastel dan layout yang clean.
        </Text>
        <View style={styles.badgeRow}>
          <View style={styles.badge}><Text style={styles.badgeText}>UI/UX</Text></View>
          <View style={styles.badge}><Text style={styles.badgeText}>Figma</Text></View>
          <View style={styles.badge}><Text style={styles.badgeText}>Branding</Text></View>
        </View>
      </View>
    );
  }

  if (activeTab === "services") {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.sectionTitle}>Services</Text>
        {[
          { t: "Mobile App Design", p: "Wireframe → Hi-fi → Prototype" },
          { t: "Website Redesign", p: "Landing page & dashboard" },
          { t: "Design System", p: "Component & token library" },
        ].map((s) => (
          <View key={s.t} style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>{s.t}</Text>
            <Text style={styles.serviceDesc}>{s.p}</Text>
          </View>
        ))}
      </View>
    );
  }

  // portfolio
  return (
    <View style={styles.grid}>
      {items.map((it) => (
        <View key={it.id} style={styles.cell}>
          <PortfolioCard item={it} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 28,
  },
  cell: {
    width: "48%",
    flexBasis: "48%",
  },
  tabContent: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 24,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#1A1E2E",
  },
  paragraph: {
    fontSize: 13,
    lineHeight: 19,
    color: "#6B7583",
  },
  badgeRow: {
    flexDirection: "row",
    gap: 8,
    flexWrap: "wrap",
    paddingTop: 4,
  },
  badge: {
    backgroundColor: "#F3EFFF",
    borderWidth: 1,
    borderColor: "#E8E0FF",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 100,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#8B5CF6",
  },
  serviceCard: {
    backgroundColor: "#F8F7FF",
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: "#EDE8FF",
  },
  serviceTitle: {
    fontSize: 13,
    fontWeight: "800",
    color: "#1A1E2E",
  },
  serviceDesc: {
    fontSize: 12,
    color: "#6B7583",
    marginTop: 3,
  },
  emptyWrap: {
    alignItems: "center",
    paddingVertical: 28,
    gap: 6,
  },
  emptyTitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#1A1E2E",
  },
  emptySubtitle: {
    fontSize: 12,
    color: "#9AA0A8",
  },
});
