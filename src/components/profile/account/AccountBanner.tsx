import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle, Ellipse, G, Path, Rect } from "react-native-svg";

export default function AccountBanner() {
  return (
    <View style={styles.wrap}>
      <Svg viewBox="0 0 360 140" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        {/* sky */}
        <Rect x={0} y={0} width={360} height={140} fill="#0EA5E9" />
        {/* orange mascot */}
        <G>
          <Rect x={8} y={22} width={74} height={74} rx={12} fill="#FB923C" />
          <Path d="M42 22 L48 6 L54 22 Z" fill="#FB923C" />
          <Ellipse cx={32} cy={52} rx={13} ry={14} fill="#FFFFFF" />
          <Ellipse cx={58} cy={52} rx={13} ry={14} fill="#FFFFFF" />
          <Circle cx={32} cy={54} r={4} fill="#111827" />
          <Circle cx={58} cy={54} r={4} fill="#111827" />
          <Circle cx={30} cy={51} r={1.6} fill="#FFFFFF" />
          <Circle cx={56} cy={51} r={1.6} fill="#FFFFFF" />
          <Path d="M36 70 Q45 78 54 70" stroke="#111827" strokeWidth={2} fill="none" strokeLinecap="round" />
          <Circle cx={22} cy={66} r={2} fill="#FDBA74" opacity={0.9} />
          <Circle cx={68} cy={66} r={2} fill="#FDBA74" opacity={0.9} />
          <Path d="M18 86 L6 98 M72 86 L84 98" stroke="#0F172A" strokeWidth={2.2} strokeLinecap="round" />
        </G>
        {/* yellow mascot */}
        <G>
          <Rect x={94} y={28} width={74} height={68} rx={12} fill="#FACC15" />
          <Path d="M128 28 L134 12 L140 28 Z" fill="#FACC15" />
          <Circle cx={118} cy={56} r={16} fill="#FFFFFF" stroke="#111827" strokeWidth={1.4} />
          <Circle cx={144} cy={56} r={16} fill="#FFFFFF" stroke="#111827" strokeWidth={1.4} />
          <Circle cx={118} cy={58} r={3.2} fill="#111827" />
          <Circle cx={144} cy={58} r={3.2} fill="#111827" />
          <Path d="M122 59 L126 63 L122 67" stroke="#111827" strokeWidth={1.2} fill="none" />
          <Path d="M114 74 Q131 78 148 74" stroke="#111827" strokeWidth={1.6} fill="none" strokeLinecap="round" />
          <Path d="M104 82 L92 94 M158 82 L170 94" stroke="#0F172A" strokeWidth={2} strokeLinecap="round" />
          {/* blush */}
          <Ellipse cx={106} cy={66} rx={4} ry={2.5} fill="#FDBA74" opacity={0.7} />
          <Ellipse cx={156} cy={66} rx={4} ry={2.5} fill="#FDBA74" opacity={0.7} />
        </G>
        {/* dark blue mascot with guitar */}
        <G>
          <Rect x={178} y={22} width={78} height={74} rx={12} fill="#1E3A8A" />
          <Path d="M212 22 L218 6 L224 22 Z" fill="#1E3A8A" />
          <Ellipse cx={204} cy={48} rx={15} ry={12} fill="#FFFFFF" />
          <Ellipse cx={232} cy={48} rx={15} ry={12} fill="#FFFFFF" />
          <Path d="M200 48 L196 44 L204 42 L212 44 L208 48 Z" fill="#FACC15" stroke="#111827" strokeWidth={1} />
          <Path d="M228 48 L224 44 L232 42 L240 44 L236 48 Z" fill="#FACC15" stroke="#111827" strokeWidth={1} />
          <Circle cx={216} cy={68} r={3.5} fill="#F87171" />
          <Ellipse cx={200} cy={64} rx={5} ry={3} fill="#BFDBFE" opacity={0.3} />
          {/* guitar */}
          <G transform="rotate(-18 218 72)">
            <Rect x={198} y={64} width={52} height={14} rx={7} fill="#93C5FD" stroke="#1E3A8A" strokeWidth={1} />
            <Rect x={244} y={67} width={10} height={8} rx={2} fill="#1E3A8A" />
            <Circle cx={210} cy={71} r={3} fill="#1E3A8A" opacity={0.2} />
          </G>
          <Path d="M186 84 L176 96 M250 84 L262 96" stroke="#0F172A" strokeWidth={2} strokeLinecap="round" />
        </G>
        {/* pink mascot */}
        <G>
          <Rect x={266} y={34} width={78} height={68} rx={12} fill="#F472B6" />
          <Path d="M300 34 L308 16 L312 34 Z" fill="#F472B6" />
          <Path d="M270 34 L276 20 L282 34 Z" fill="#F472B6" opacity={0.9} />
          <Ellipse cx={288} cy={56} rx={13} ry={11} fill="#FFFFFF" />
          <Ellipse cx={316} cy={56} rx={13} ry={11} fill="#FFFFFF" />
          <Path d="M282 52 C286 46 294 46 298 52 C302 46 310 46 314 52 C314 62 298 70 298 70 C298 70 282 62 282 52 Z" fill="#E11D48" />
          <Circle cx={291} cy={54} r={1.2} fill="#FFFFFF" />
          <Circle cx={313} cy={54} r={1.2} fill="#FFFFFF" />
          <Circle cx={304} cy={72} r={5} fill="#E11D48" />
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 148,
    backgroundColor: "#0EA5E9",
    overflow: "hidden",
  },
});
