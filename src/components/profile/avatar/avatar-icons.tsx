import React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";

export function CameraIcon({ color = "#1E3A8A", size = 20 }: { color?: string; size?: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M4 8.5h3l1.5-2h7L17 8.5h3a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 17v-7A1.5 1.5 0 0 1 4 8.5Z"
        stroke={color}
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <Circle cx={12} cy={13} r={3.2} stroke={color} strokeWidth={1.6} />
    </Svg>
  );
}

export function GalleryIcon({ color = "#1E3A8A", size = 20 }: { color?: string; size?: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Rect x={3.5} y={4.5} width={17} height={15} rx={2.5} stroke={color} strokeWidth={1.6} />
      <Circle cx={9} cy={10} r={1.7} stroke={color} strokeWidth={1.5} />
      <Path d="M5 17l4.5-4.5 3 3L16 12l3 3" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function TrashIcon({ color = "#EF4444", size = 20 }: { color?: string; size?: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M4 7h16M9 7V5h6v2M6.5 7l.8 12h9.4l.8-12" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M10 11v4M14 11v4" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
    </Svg>
  );
}
