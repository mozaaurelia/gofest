import React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";

const ICON_COLOR = "#2FA8C0";

type IconProps = {
  size?: number;
  color?: string;
};

export function ScheduleGuideIcon({ size = 20, color = ICON_COLOR }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Circle cx={12} cy={12} r={8.4} stroke={color} strokeWidth={1.7} />
      <Path d="M12 7.6V12l3 1.8" stroke={color} strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function BringGuideIcon({ size = 20, color = ICON_COLOR }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M4.4 9.2h15.2v2.3a2 2 0 0 0 0 4v2.3H4.4v-2.3a2 2 0 0 0 0-4V9.2Z"
        stroke={color}
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
      <Path d="M9 12.4h6" stroke={color} strokeWidth={1.4} strokeLinecap="round" strokeDasharray="2 2.2" />
    </Svg>
  );
}

export function RulesGuideIcon({ size = 20, color = ICON_COLOR }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M12 3.4l6.8 3.6v5.1c0 4.1-2.7 7-6.8 8.5-4.1-1.5-6.8-4.4-6.8-8.5V7l6.8-3.6Z"
        stroke={color}
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
      <Path d="M9 12l2.1 2.1L15.2 10" stroke={color} strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function LocationGuideIcon({ size = 20, color = ICON_COLOR }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M12 21s-6.5-5.9-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.1-6.5 11-6.5 11Z"
        stroke={color}
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
      <Circle cx={12} cy={10} r={2.2} stroke={color} strokeWidth={1.7} />
    </Svg>
  );
}

export function HelpGuideIcon({ size = 20, color = ICON_COLOR }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M4.4 7.2c0-1.6 1.3-2.9 2.9-2.9h9.4c1.6 0 2.9 1.3 2.9 2.9v5.6c0 1.6-1.3 2.9-2.9 2.9h-2.4L11 19.6v-3.9H7.3c-1.6 0-2.9-1.3-2.9-2.9V7.2Z"
        stroke={color}
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
      <Path d="M9.7 8.7A2.3 2.3 0 0 1 12 6.6a2.3 2.3 0 0 1 2.3 2.3c0 1.5-1.7 2.1-2.3 3.2" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
      <Circle cx={12} cy={15} r={0.9} fill={color} />
    </Svg>
  );
}

export function CalendarGuideIcon({ size = 14, color = "#FFFFFF" }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Rect x={4} y={5.4} width={16} height={14.6} rx={3.2} stroke={color} strokeWidth={1.8} />
      <Path d="M4.2 10h15.6" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
      <Path d="M8.3 3.8v3.2M15.7 3.8v3.2" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

export function PinGuideIcon({ size = 14, color = "#FFFFFF" }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M12 21s-6.5-5.9-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.1-6.5 11-6.5 11Z"
        stroke={color}
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <Circle cx={12} cy={10} r={2.2} stroke={color} strokeWidth={1.8} />
    </Svg>
  );
}
