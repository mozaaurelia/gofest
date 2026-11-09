import React, { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import MenuItem from "./MenuItem";

export type MenuEntry = {
  key: string;
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
};

type Props = {
  items: MenuEntry[];
};

export default function MenuCard({ items }: Props) {
  return (
    <View style={styles.shadow}>
      <View style={styles.card}>
        {items.map((item, index) => (
          <Fragment key={item.key}>
            {index > 0 ? <View style={styles.divider} /> : null}
            <MenuItem icon={item.icon} label={item.label} onPress={item.onPress} />
          </Fragment>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    borderRadius: 26,
    backgroundColor: "#FFFFFF",
    shadowColor: "#1A2E4D",
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 8,
  },
  card: {
    borderRadius: 26,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },
  divider: {
    height: 1,
    marginHorizontal: 22,
    backgroundColor: "#E5E7EB",
  },
});
