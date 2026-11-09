import React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";

type IconProps = {
  size?: number;
  color?: string;
};

export function TicketCheckIcon({ size = 34, color = "#7DD3FC" }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" style={{ transform: [{ rotate: "-8deg" }] }}>
      <Path
        d="M3 7.5h18v5.8a2.7 2.7 0 0 0 0 5.4v1.8H3v-1.8a2.7 2.7 0 0 0 0-5.4V7.5Z"
        fill={color}
      />
      <Path
        d="M8 13.6l2.3 2.2 4-4.4"
        stroke="#FFFFFF"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M3 12h18" stroke="#FFFFFF" strokeWidth={1.1} strokeDasharray="1.6 1.6" opacity={0.7} />
    </Svg>
  );
}

export function CustomerIcon({ size = 28, color = "#0B5CFF" }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Circle cx={9.2} cy={8.4} r={3.2} fill={color} />
      <Path
        d="M3.2 18.6c.5-3.1 3-4.9 6-4.9s5.5 1.8 6 4.9"
        stroke={color}
        strokeWidth={2.6}
        strokeLinecap="round"
      />
      <Circle cx={17.2} cy={9.2} r={2.4} fill={color} opacity={0.85} />
      <Path
        d="M15.8 14.2c2.4.2 4 1.7 4.5 4.2"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        opacity={0.85}
      />
    </Svg>
  );
}

export function QrisMark({ size = 44, color = "#111111" }: IconProps) {
  return (
    <Svg viewBox="0 0 74 32" width={size} height={(size / 74) * 32} fill="none">
      <Rect x={2.5} y={7} width={15.5} height={15.5} stroke={color} strokeWidth={4} />
      <Path d="M13 19.5 19.5 26" stroke={color} strokeWidth={4} strokeLinecap="square" />
      <Path
        d="M26.5 24V7.5H37V17H26.5M35.5 17L41 24"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <Path d="M47 7.5V24" stroke={color} strokeWidth={4} strokeLinecap="square" />
      <Path
        d="M68.5 9.5H58.5V16.5H68.5V24H58.5"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </Svg>
  );
}

export function LoketMark({ size = 38, color = "#142C4A" }: IconProps) {
  return (
    <Svg viewBox="0 0 100 100" width={size} height={size}>
      <Path
        d="M14 18C14 11.5 18.2 7.2 24.8 7.2H44.6V30.2H60.2V7.2H75.2C81.8 7.2 86 11.5 86 18V75.2C86 81.8 81.8 86 75.2 86H24.8C18.2 86 14 81.8 14 75.2V18Z"
        fill={color}
      />
      <Path d="M44.6 1L44.6 26L53.5 12Z" fill={color} />
      <Path d="M33.2 18.5V68.8H69V55.2H46.8V18.5H33.2Z" fill="#FFFFFF" />
    </Svg>
  );
}
