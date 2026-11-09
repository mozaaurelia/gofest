import React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";

const ICON_COLOR = "#142C4A";

type IconProps = {
  size?: number;
  color?: string;
};

export function AccountMenuIcon({ size = 26, color = ICON_COLOR }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Circle cx={12} cy={7.6} r={3.4} stroke={color} strokeWidth={1.8} />
      <Path d="M5.6 19.2c0-3 2.9-4.9 6.4-4.9s6.4 1.9 6.4 4.9" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

export function CalendarMenuIcon({ size = 26, color = ICON_COLOR }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Rect x={4} y={5.4} width={16} height={14.6} rx={3.2} stroke={color} strokeWidth={1.8} />
      <Path d="M4.2 10h15.6" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
      <Path d="M8.3 3.8v3.2M15.7 3.8v3.2" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

export function LanguageMenuIcon({ size = 26, color = ICON_COLOR }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Rect x={3.4} y={3.4} width={17.2} height={17.2} rx={4} stroke={color} strokeWidth={1.8} />
      <Path d="M7.8 8.3h8.4" stroke={color} strokeWidth={1.6} strokeLinecap="round" />
      <Path d="M12 8.3v1.7" stroke={color} strokeWidth={1.6} strokeLinecap="round" />
      <Path d="M9.6 10.4c.5 2.1 1.8 3.9 4 5.2" stroke={color} strokeWidth={1.6} strokeLinecap="round" />
      <Path d="M14.9 10.4c-.5 2.1-1.8 3.9-4 5.2" stroke={color} strokeWidth={1.6} strokeLinecap="round" />
      <Path d="M8.2 15.6h7.6" stroke={color} strokeWidth={1.6} strokeLinecap="round" />
    </Svg>
  );
}

export function HelpMenuIcon({ size = 26, color = ICON_COLOR }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M4.4 7.2c0-1.6 1.3-2.9 2.9-2.9h9.4c1.6 0 2.9 1.3 2.9 2.9v5.6c0 1.6-1.3 2.9-2.9 2.9h-2.4L11 19.6v-3.9H7.3c-1.6 0-2.9-1.3-2.9-2.9V7.2Z"
        stroke={color}
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <Circle cx={9.3} cy={10} r={0.9} fill={color} />
      <Circle cx={14.7} cy={10} r={0.9} fill={color} />
      <Path d="M9.3 12.4c1.5 1.2 3.9 1.2 5.4 0" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </Svg>
  );
}

export function CloseMenuIcon({ size = 20, color = ICON_COLOR }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M6.6 6.6l10.8 10.8M17.4 6.6L6.6 17.4" stroke={color} strokeWidth={2.1} strokeLinecap="round" />
    </Svg>
  );
}
