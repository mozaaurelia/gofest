import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path, Circle, Ellipse, Rect, G } from "react-native-svg";

export default function OnboardingTransferIllustration() {
  return (
    <View style={styles.wrap}>
      <Svg viewBox="0 0 340 300" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        {/* stage bg card */}
        <Rect x={24} y={20} width={292} height={220} rx={16} fill="#2A375F" />
        {/* spotlight cones */}
        <Path d="M48 32 L128 150 L152 150 L72 32 Z" fill="#CFC98A" opacity={0.45} />
        <Path d="M292 32 L212 150 L188 150 L268 32 Z" fill="#CFC98A" opacity={0.45} />
        {/* spotlights */}
        <G>
          <Ellipse cx={54} cy={30} rx={18} ry={8} fill="#E8918A" />
          <Ellipse cx={58} cy={26} rx={10} ry={8} fill="#FFD9C2" />
          <Ellipse cx={58} cy={26} rx={5} ry={4} fill="#FFFFFF" />
          <Rect x={38} y={30} width={40} height={6} rx={2} fill="#E8918A" />
          <Rect x={36} y={28} width={6} height={10} rx={2} fill="#D97A7A" />
          <Rect x={74} y={28} width={6} height={10} rx={2} fill="#D97A7A" />
        </G>
        <G>
          <Ellipse cx={286} cy={30} rx={18} ry={8} fill="#E8918A" />
          <Ellipse cx={282} cy={26} rx={10} ry={8} fill="#FFD9C2" />
          <Ellipse cx={282} cy={26} rx={5} ry={4} fill="#FFFFFF" />
          <Rect x={262} y={30} width={40} height={6} rx={2} fill="#E8918A" />
          <Rect x={260} y={28} width={6} height={10} rx={2} fill="#D97A7A" />
          <Rect x={298} y={28} width={6} height={10} rx={2} fill="#D97A7A" />
        </G>
        {/* floor */}
        <Path d="M24 160 L316 160 L290 240 L50 240 Z" fill="#D99A9A" />
        <Path d="M170 160 L290 240 L170 240 Z" fill="#C98A8A" opacity={0.9} />
        <Path d="M170 160 L50 240 L170 240 Z" fill="#E8B0A8" opacity={0.9} />
        {/* small pyramid bottom right inside card */}
        <Path d="M260 240 L285 220 L310 240 Z" fill="#1E274D" />
        {/* ground dots */}
        <Ellipse cx={70} cy={225} rx={14} ry={6} fill="#8B5A5A" opacity={0.3} />
        <Ellipse cx={92} cy={218} rx={10} ry={5} fill="#8B5A5A" opacity={0.3} />
        {/* ticket */}
        <G transform="rotate(-12 170 120)">
          <Rect x={140} y={92} width={62} height={72} rx={6} fill="#FFD27A" stroke="#E8A84C" strokeWidth={1.5} />
          <Rect x={146} y={100} width={50} height={30} rx={2} fill="#FFF7E0" stroke="#E8A84C" strokeWidth={1} />
          <Path d="M152 108 L190 108 M152 114 L182 114 M152 120 L186 120" stroke="#E8A84C" strokeWidth={1} strokeLinecap="round" opacity={0.6} />
          <Rect x={160} y={138} width={22} height={16} fill="#FFFFFF" stroke="#E8A84C" strokeWidth={0.8} />
          <Path d="M162 140 h3 v2 h-3 v3 h-3 v-3 h-3 v-2 h3 v-2 h3 Z M168 142 h3 v3 h3 v2 h-3 v3 h-3 v-3 h-3 v-2 h3 Z" fill="#1A3A6B" />
        </G>
        {/* BLUE character left */}
        <G>
          <Rect x={14} y={108} width={86} height={78} rx={12} fill="#1E5BFF" stroke="#1A3A6B" strokeWidth={2} />
          <Path d="M58 108 L66 82 L74 108 Z" fill="#1E5BFF" stroke="#1A3A6B" strokeWidth={2} />
          <Ellipse cx={36} cy={138} rx={16} ry={14} fill="#FFFFFF" />
          <Ellipse cx={68} cy={138} rx={16} ry={14} fill="#FFFFFF" />
          <Rect x={20} y={132} width={28} height={16} rx={8} fill="#FFD600" stroke="#111827" strokeWidth={1.5} />
          <Rect x={56} y={132} width={28} height={16} rx={8} fill="#FFD600" stroke="#111827" strokeWidth={1.5} />
          <Path d="M30 136 L36 142 L32 142 L38 146 L30 142 L34 136 Z" fill="#111827" />
          <Path d="M66 136 L72 142 L68 142 L74 146 L66 142 L70 136 Z" fill="#111827" />
          <Path d="M38 152 Q52 165 66 152" fill="#FFFFFF" stroke="#D00" strokeWidth={1.2} />
          <Ellipse cx={52} cy={160} rx={6} ry={3} fill="#FF6B6B" />
          <Path d="M14 165 Q2 185 8 200" stroke="#1A3A6B" strokeWidth={2} fill="none" strokeLinecap="round" />
          <Path d="M100 145 Q118 155 112 168" stroke="#1A3A6B" strokeWidth={2} fill="none" strokeLinecap="round" />
          <Path d="M14 186 L40 186 L40 220" stroke="#1A3A6B" strokeWidth={2} fill="none" />
          <Path d="M60 186 L60 220" stroke="#1A3A6B" strokeWidth={2} fill="none" />
        </G>
        {/* ORANGE character right */}
        <G>
          <Rect x={236} y={108} width={86} height={78} rx={12} fill="#FF8C1A" stroke="#B45A00" strokeWidth={2} />
          <Path d="M280 108 L288 82 L294 108 Z" fill="#FF8C1A" stroke="#B45A00" strokeWidth={2} />
          <Ellipse cx={256} cy={138} rx={14} ry={12} fill="#FFFFFF" />
          <Ellipse cx={286} cy={138} rx={14} ry={12} fill="#FFFFFF" />
          <Circle cx={256} cy={140} r={4} fill="#111827" />
          <Circle cx={286} cy={140} r={4} fill="#111827" />
          <Circle cx={254} cy={138} r={1.4} fill="#FFFFFF" />
          <Circle cx={284} cy={138} r={1.4} fill="#FFFFFF" />
          <Path d="M266 152 Q272 162 280 152 Q278 158 272 160 Q266 158 266 152" fill="#1A1A1A" />
          <Path d="M274 158 Q276 160 278 158" fill="#FFB3D1" />
          <Ellipse cx={252} cy={150} rx={3} ry={1.8} fill="#E07A3A" opacity={0.6} />
          <Ellipse cx={290} cy={150} rx={3} ry={1.8} fill="#E07A3A" opacity={0.6} />
          <Path d="M236 165 Q250 175 242 188" stroke="#1A3A6B" strokeWidth={2} fill="none" strokeLinecap="round" />
          <Path d="M322 165 Q332 185 326 198" stroke="#1A3A6B" strokeWidth={2} fill="none" strokeLinecap="round" />
          <Path d="M254 186 L254 220" stroke="#1A3A6B" strokeWidth={2} fill="none" />
          <Path d="M280 186 L280 220" stroke="#1A3A6B" strokeWidth={2} fill="none" />
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { width: "100%", height: 300, alignItems: "center", justifyContent: "center" },
});
