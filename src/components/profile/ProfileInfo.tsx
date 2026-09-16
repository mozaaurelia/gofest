import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";

type Props = {
  name: string;
  role: string;
  location: string;
};

export function ProfileInfo({ name, role, location }: Props) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.metaRow}>
        <Text style={styles.role}>{role}</Text>
        <View style={styles.dot} />
        <View style={styles.locRow}>
          <Svg width={11} height={11} viewBox="0 0 24 24" fill="none">
            <Path
              d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z"
              stroke="#8B5CF6"
              strokeWidth={1.9}
              strokeLinejoin="round"
            />
            <Path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="#8B5CF6" strokeWidth={1.9} />
          </Svg>
          <Text style={styles.location}>{location}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 16,
    gap: 4,
  },
  name: {
    fontSize: 19,
    fontWeight: "800",
    color: "#1A1E2E",
    letterSpacing: 0.1,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  role: {
    fontSize: 12.5,
    color: "#6B7583",
    fontWeight: "500",
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 10,
    backgroundColor: "#D1D5DB",
    marginTop: 1,
  },
  locRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3.5,
  },
  location: {
    fontSize: 12.5,
    color: "#6B7583",
    fontWeight: "500",
  },
});
