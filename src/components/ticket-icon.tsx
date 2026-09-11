import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

type TicketIconProps = {
  size?: number;
  gradientId?: string;
};

export default function TicketIcon({ size = 60, gradientId = "ticketIconGrad" }: TicketIconProps) {
  const height = (size / 60) * 76;

  return (
    <Svg width={size} height={height} viewBox="0 0 60 76" fill="none">
      <Defs>
        <LinearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0%" stopColor="#2FA8C0" />
          <Stop offset="100%" stopColor="#8FD14F" />
        </LinearGradient>
      </Defs>
      <Path
        d="M14 4 H38 a6 6 0 0 1 6 6 v6 a4 4 0 0 0 0 8 v14 a6 6 0 0 1 -1.76 4.24 L27 58 L8 39 V12 a8 8 0 0 1 8 -8 Z"
        stroke={`url(#${gradientId})`}
        strokeWidth={2.4}
        strokeLinejoin="round"
      />
      <Path d="M22 47 a3 3 0 0 0 0 6" stroke={`url(#${gradientId})`} strokeWidth={2.4} strokeLinecap="round" />
      <Path d="M16 20 L24 20 M16 26 L22 26" stroke={`url(#${gradientId})`} strokeWidth={2.4} strokeLinecap="round" />
      <Path d="M14 38 h.01 M19 38 h.01 M24 38 h.01" stroke={`url(#${gradientId})`} strokeWidth={3} strokeLinecap="round" />
    </Svg>
  );
}