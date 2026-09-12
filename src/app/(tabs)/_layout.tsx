import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Tabs } from "expo-router";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type TabName = "home" | "kalender" | "ticket" | "profile";

const NAVY = "#142C4A";
const NAVY_ACTIVE_BG = "#162E50";

function TabIcon({ name, color }: { name: TabName; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={22} height={22} fill="none">
      {name === "home" && (
        <>
          {/* home like in reference: simple house */}
          <Path d="M4 10.2 12 4l8 6.2V19a1.5 1.5 0 0 1-1.5 1.5H5.5A1.5 1.5 0 0 1 4 19v-8.8Z" stroke={color} strokeWidth={1.9} strokeLinejoin="round" />
          <Path d="M9 20.5v-6h6v6" stroke={color} strokeWidth={1.9} strokeLinejoin="round" />
          <Path d="M9 12.5h6" stroke={color} strokeWidth={1.4} strokeLinecap="round" opacity={0.9} />
        </>
      )}
      {name === "kalender" && (
        <>
          <Rect x="3.5" y="5.2" width="17" height="14.8" rx="2" stroke={color} strokeWidth={1.9} />
          <Path d="M3.5 9.8h17" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
          <Path d="M8 3.5v3.5M16 3.5v3.5" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
          <Path d="M7.5 13.5h2M11 13.5h2M14.5 13.5h2M7.5 16.5h2M11 16.5h2M14.5 16.5h2" stroke={color} strokeWidth={1.2} strokeLinecap="round" opacity={0} />
        </>
      )}
      {name === "ticket" && (
        <>
          <Path
            d="M4.2 8.2h15.6v2.6a2.2 2.2 0 0 0 0 4.4v2.6H4.2v-2.6a2.2 2.2 0 0 0 0-4.4V8.2Z"
            stroke={color}
            strokeWidth={1.9}
            strokeLinejoin="round"
          />
          <Path d="M8.2 12h7.6" stroke={color} strokeWidth={1.2} strokeLinecap="round" strokeDasharray="1.5 2.2" opacity={0.95} />
        </>
      )}
      {name === "profile" && (
        <>
          <Circle cx="12" cy="8.2" r="3.6" stroke={color} strokeWidth={1.9} />
          <Path d="M5.2 19.2c0-3.1 2.9-5.2 6.8-5.2s6.8 2.1 6.8 5.2" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
        </>
      )}
    </Svg>
  );
}

function routeToTabName(routeName: string): TabName {
  if (routeName === "index") return "home";
  if (routeName === "kalender") return "kalender";
  if (routeName === "ticket") return "ticket";
  return "profile";
}

function CustomTabBar({ state, navigation }: any) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapper, { paddingBottom: Math.max(insets.bottom, 10) + 8 }]} pointerEvents="box-none">
      <View style={styles.row}>
        {/* floating pill */}
        <View style={styles.pill}>
          {state.routes.map((route: any, index: number) => {
            const isFocused = state.index === index;
            const tabName = routeToTabName(route.name);

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, route.params);
              }
            };

            return (
              <Pressable
                key={route.key}
                onPress={onPress}
                style={[styles.tabBtn, isFocused && styles.tabBtnActive]}
                android_ripple={{ color: "transparent" }}
              >
                <TabIcon name={tabName} color={isFocused ? "#FFFFFF" : NAVY} />
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.followRow} pointerEvents="none">
        {/* <Text style={styles.followText}>Follow us on:</Text> */}
      </View>
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        // prevent default bar from showing; we use custom
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="kalender" options={{ title: "Kalender" }} />
      <Tabs.Screen name="ticket" options={{ title: "Ticket" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "transparent",
    paddingHorizontal: 14,
    paddingTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  pill: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 8,
    // shadow - iOS
    shadowColor: "#1A2E4D",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.14,
    shadowRadius: 18,
    // shadow - android
    elevation: 10,
  },
  tabBtn: {
    flex: 1,
    height: 44,
    maxWidth: 72,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  tabBtnActive: {
    backgroundColor: NAVY_ACTIVE_BG,
  },
  followRow: {
    height: 6,
  },
});
