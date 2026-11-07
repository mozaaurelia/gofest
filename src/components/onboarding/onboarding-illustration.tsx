import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path, Circle, Ellipse, Rect, G } from "react-native-svg";

export default function OnboardingIllustration() {
  return (
    <View style={styles.wrap}>
      <Svg viewBox="0 0 360 360" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        {/* sky dark navy */}
        <Rect x={0} y={0} width={360} height={360} fill="#232E58" />
        {/* mountain shadow besar */}
        <Path d="M210 0 L360 180 L360 0 Z" fill="#1E274D" opacity={0.95} />
        {/* cloud shapes left */}
        <Ellipse cx={40} cy={130} rx={90} ry={70} fill="#8EC8F0" />
        <Ellipse cx={80} cy={150} rx={70} ry={50} fill="#7FBFF0" />
        <Ellipse cx={110} cy={180} rx={60} ry={40} fill="#5BADE8" />
        <Ellipse cx={50} cy={200} rx={80} ry={45} fill="#A8D8F5" opacity={0.9} />
        <Ellipse cx={100} cy={210} rx={90} ry={35} fill="#7ED8D0" opacity={0.9} />
        {/* ground pinkish */}
        <Rect x={0} y={230} width={360} height={130} fill="#C98A8A" />
        <Rect x={0} y={230} width={360} height={130} fill="#D99A9A" opacity={0.6} />
        {/* pyramid shadow */}
        <Path d="M245 360 L305 320 L365 360 Z" fill="#6B2A2E" opacity={0.2} />
        <Path d="M245 360 L305 320 L310 325 L250 360 Z" fill="#1E274D" />
        <Path d="M305 320 L365 360 L310 325 Z" fill="#2A375F" />
        {/* door pair */}
        {/* left door */}
        <G>
          <Path d="M140 110 Q165 90 195 105 L195 320 L125 315 L125 125 Z" fill="#BFE6FF" stroke="#2E8BD6" strokeWidth={2.5} />
          <Path d="M140 110 Q165 90 195 105 L195 320 L125 315 L125 125 Z" fill="none" stroke="#FFFFFF" strokeWidth={0.8} opacity={0.4} />
          {/* inner panel */}
          <Path d="M138 128 Q162 112 182 124 L182 305 L135 301 L135 135 Z" fill="none" stroke="#2E8BD6" strokeWidth={1.6} />
          <Path d="M135 210 L182 212" stroke="#2E8BD6" strokeWidth={1.4} />
          {/* L logo */}
          <Path d="M158 158 L158 178 L172 178" stroke="#2E8BD6" strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <Rect x={164} y={150} width={12} height={12} fill="#2E8BD6" opacity={0.9} />
          {/* handle */}
          <Rect x={122} y={200} width={14} height={18} rx={2} fill="#CDEFFF" stroke="#2E8BD6" strokeWidth={1.4} />
          <Circle cx={128} cy={209} r={2} fill="#2E8BD6" />
        </G>
        {/* right door (open) */}
        <G>
          <Path d="M195 105 Q225 88 265 105 L255 315 L195 320 Z" fill="#EAF6FF" stroke="#2E8BD6" strokeWidth={2.5} />
          {/* bunting */}
          <Path d="M215 115 L225 130 L235 117 Z" fill="#FFB84D" />
          <Path d="M235 117 L245 132 L255 120 Z" fill="#E8F0FF" />
          <Path d="M255 120 L265 133 L272 118 Z" fill="#FFD34D" />
          <Path d="M272 118 L282 131 L290 115 Z" fill="#E8F0FF" opacity={0.9} />
        </G>
        {/* character blue square */}
        <G>
          {/* body */}
          <Rect x={18} y={195} width={82} height={74} rx={10} fill="#1A3A6B" stroke="#0F274F" strokeWidth={2} />
          {/* spike */}
          <Path d="M58 195 L68 168 L74 195 Z" fill="#1A3A6B" stroke="#0F274F" strokeWidth={2} />
          {/* eyes white */}
          <Ellipse cx={38} cy={225} rx={16} ry={14} fill="#FFFFFF" />
          <Ellipse cx={68} cy={225} rx={16} ry={14} fill="#FFFFFF" />
          {/* glasses yellow */}
          <G>
            <Rect x={22} y={218} width={30} height={18} rx={8} fill="#FFD600" stroke="#111827" strokeWidth={1.6} />
            <Rect x={54} y={218} width={30} height={18} rx={8} fill="#FFD600" stroke="#111827" strokeWidth={1.6} />
            <Rect x={52} y={226} width={2} height={2} fill="#111827" />
            {/* lightning */}
            <Path d="M32 222 L38 228 L34 228 L40 232 L32 228 L36 222 Z" fill="#111827" />
            <Path d="M64 222 L70 228 L66 228 L72 232 L64 228 L68 222 Z" fill="#111827" />
          </G>
          {/* mouth red */}
          <Ellipse cx={46} cy={242} rx={7} ry={4} fill="#FF3B30" />
          <Path d="M42 241 Q46 244 50 241" stroke="#FFFFFF" strokeWidth={0.8} fill="none" opacity={0.7} />
          {/* arm */}
          <Path d="M100 210 Q120 225 118 245" stroke="#1A2B4A" strokeWidth={2.2} fill="none" strokeLinecap="round" />
          <Path d="M118 245 Q115 250 110 248" stroke="#1A2B4A" strokeWidth={1.6} fill="none" />
          {/* hand on handle */}
          <Ellipse cx={122} cy={218} rx={6} ry={5} fill="#1A3A6B" stroke="#0F274F" strokeWidth={1.6} />
          {/* legs */}
          <Path d="M40 269 L40 305 Q40 312 48 312 L52 312" stroke="#1A2B4A" strokeWidth={2} fill="none" strokeLinecap="round" />
          <Path d="M70 269 L70 305 Q70 312 78 312 L82 312" stroke="#1A2B4A" strokeWidth={2} fill="none" strokeLinecap="round" />
          {/* other arm */}
          <Path d="M18 240 Q6 260 6 275" stroke="#1A2B4A" strokeWidth={2} fill="none" strokeLinecap="round" />
        </G>
        {/* ground spots */}
        <Ellipse cx={80} cy={315} rx={22} ry={8} fill="#8B5A5A" opacity={0.35} />
        <Ellipse cx={120} cy={305} rx={30} ry={10} fill="#8B5A5A" opacity={0.35} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { width: "100%", height: 360, alignItems: "center", justifyContent: "center" },
});
