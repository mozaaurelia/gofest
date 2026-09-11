import React from "react";
import { Tabs } from "expo-router";
import Svg, { Circle, Path, Rect } from "react-native-svg";
import type { ColorValue } from "react-native";
import { gfColors } from "../../constants/gf-theme";

type TabName = "home" | "kalender" | "ticket" | "profile";

function TabIcon({ name, color, barBg }: { name: TabName; color: ColorValue; barBg: ColorValue }) {
  return (
    <Svg viewBox="0 0 24 24" width={22} height={22} fill="none">
      {name === "home" && (
        <>
          <Path d="M4 10.5 12 4l8 6.5V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8.5Z" stroke={color} strokeWidth={1.8} strokeLinejoin="round" />
          <Path d="M10 21v-6h4v6" stroke={color} strokeWidth={1.8} strokeLinejoin="round" />
        </>
      )}
      {name === "kalender" && (
        <>
          <Rect x="3.5" y="5" width="17" height="15.5" rx="2" stroke={color} strokeWidth={1.8} />
          <Path d="M3.5 10h17" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
          <Path d="M8 2.8v4M16 2.8v4" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
        </>
      )}
      {name === "ticket" && (
        <>
          <Path
            d="M4 7.5h16V10a2.5 2.5 0 0 0 0 5v2.5H4V15a2.5 2.5 0 0 0 0-5V7.5Z"
            stroke={color}
            strokeWidth={1.8}
            strokeLinejoin="round"
          />
          <Circle cx="12" cy="7.5" r="1.5" fill={barBg} stroke={color} strokeWidth={1.8} />
          <Circle cx="12" cy="16.5" r="1.5" fill={barBg} stroke={color} strokeWidth={1.8} />
        </>
      )}
      {name === "profile" && (
        <>
          <Circle cx="12" cy="8.5" r="3.8" stroke={color} strokeWidth={1.8} />
          <Path d="M5 20c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
        </>
      )}
    </Svg>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: gfColors.teal,
        tabBarInactiveTintColor: "#8896A8",
        tabBarStyle: {
          backgroundColor: gfColors.bg,
          borderTopColor: gfColors.border,
        },
        tabBarLabelStyle: { fontSize: 10.5, fontWeight: "700" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabIcon name="home" color={color} barBg={gfColors.bg} />,
        }}
      />
      <Tabs.Screen
        name="kalender"
        options={{
          title: "Kalender",
          tabBarIcon: ({ color }) => <TabIcon name="kalender" color={color} barBg={gfColors.bg} />,
        }}
      />
      <Tabs.Screen
        name="ticket"
        options={{
          title: "Ticket",
          tabBarIcon: ({ color }) => <TabIcon name="ticket" color={color} barBg={gfColors.bg} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabIcon name="profile" color={color} barBg={gfColors.bg} />,
        }}
      />
    </Tabs>
  );
}