import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle, Ellipse, G, Path, Rect, Text as SvgText } from "react-native-svg";
import { gfColors } from "@/constants/gf-theme";

const INK = "#1B222D";
const SILVER = "#B9C4D6";
const SILVER_DARK = "#8A93A3";

export default function OnboardingVipIllustration() {
  return (
    <View style={styles.wrap}>
      <Svg viewBox="0 0 360 330" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        {/* VIP badge */}
        <G>
          <Rect x={166} y={28} width={28} height={38} rx={5} fill="#C2C8D0" stroke={SILVER_DARK} strokeWidth={2} />
          <Rect x={172} y={36} width={16} height={24} rx={3} fill="#E2E5EA" />

          <Rect x={126} y={58} width={108} height={152} rx={10} fill={SILVER} stroke={SILVER_DARK} strokeWidth={2} />
          <Rect x={164} y={66} width={32} height={6} rx={3} fill="#6B7683" opacity={0.5} />

          <Rect x={136} y={80} width={88} height={84} rx={6} fill="#2E3B66" />
          <Path d="M136 80 h88 v56 L136 106 Z" fill="#FFFFFF" opacity={0.06} />
          <Path d="M196 80 h28 v84 h-28 Z" fill="#FFFFFF" opacity={0.04} />

          <SvgText x={180} y={149} textAnchor="middle" fontSize={46} fontWeight="900" fill={INK} opacity={0.35} letterSpacing={1}>
            VIP
          </SvgText>
          <SvgText x={180} y={147} textAnchor="middle" fontSize={46} fontWeight="900" fill={gfColors.lime} letterSpacing={1}>
            VIP
          </SvgText>

          <Rect x={142} y={172} width={76} height={34} rx={4} fill={gfColors.lime} stroke="#5FAF33" strokeWidth={1.5} />
          <Rect x={145} y={175} width={70} height={28} rx={2} fill="none" stroke="#5FAF33" strokeWidth={1} opacity={0.55} />
          <SvgText x={180} y={186} textAnchor="middle" fontSize={9} fontWeight="800" fill={INK} letterSpacing={0.4}>
            BACKSTAGE
          </SvgText>
          <SvgText x={180} y={199} textAnchor="middle" fontSize={13} fontWeight="900" fill={INK} letterSpacing={0.5}>
            PASS
          </SvgText>
        </G>

        {/* headphones */}
        <G transform="rotate(-12 76 248)">
          <Path d="M30 250 C30 190 118 190 118 250" stroke={gfColors.teal} strokeWidth={15} fill="none" strokeLinecap="round" />
          <Path d="M36 244 C36 197 112 197 112 244" stroke="#7BD4E4" strokeWidth={5} fill="none" strokeLinecap="round" opacity={0.55} />

          <Rect x={44} y={224} width={12} height={16} rx={4} fill="#C2C8D0" />
          <Rect x={104} y={224} width={12} height={16} rx={4} fill="#C2C8D0" />

          <Rect x={14} y={236} width={42} height={54} rx={15} fill={gfColors.lime} stroke="#5FAF33" strokeWidth={2} />
          <Ellipse cx={46} cy={263} rx={9} ry={17} fill="#2E3542" />
          <Rect x={104} y={236} width={42} height={54} rx={15} fill={gfColors.lime} stroke="#5FAF33" strokeWidth={2} />
          <Ellipse cx={114} cy={263} rx={9} ry={17} fill="#2E3542" />
        </G>

        {/* VIP section access coin */}
        <G>
          <Circle cx={290} cy={232} r={48} fill="#2E3B66" />
          <Circle cx={290} cy={232} r={48} fill="none" stroke={gfColors.lime} strokeWidth={5} />
          <Circle cx={290} cy={232} r={39} fill="none" stroke={gfColors.green} strokeWidth={1.5} opacity={0.5} />
          <Path d="M256 204 a48 48 0 0 1 32 -19" stroke="#FFFFFF" strokeWidth={2} fill="none" strokeLinecap="round" opacity={0.35} />
          <SvgText x={290} y={238} textAnchor="middle" fontSize={28} fontWeight="900" fill={gfColors.lime} letterSpacing={1}>
            VIP
          </SvgText>
          <SvgText x={290} y={252} textAnchor="middle" fontSize={7} fontWeight="700" fill="#EAF6FF" opacity={0.85} letterSpacing={0.6}>
            SECTION-ACCESS
          </SvgText>
        </G>

        {/* sparkles */}
        <Path d="M114 60 l2.4 5.6 L122 68 l-5.6 2.4 L114 76 l-2.4 -5.6 L106 68 l5.6 -2.4 Z" fill={gfColors.lime} />
        <Path d="M256 86 l1.8 4.2 L262 92 l-4.2 1.8 L256 98 l-1.8 -4.2 L250 92 l4.2 -1.8 Z" fill="#FFFFFF" opacity={0.85} />
        <Path d="M168 268 l2 4.6 L174 274 l-4.6 2 L168 280 l-2 -4.6 L162 274 l4.6 -2 Z" fill={gfColors.lime} />
        <Path d="M48 146 l1.6 3.8 L54 151 l-3.8 1.6 L48 156 l-1.6 -3.8 L42 151 l3.8 -1.6 Z" fill={gfColors.lime} opacity={0.8} />
        <Path d="M318 158 l1.5 3.4 L323 163 l-3.4 1.5 L318 168 l-1.5 -3.4 L313 163 l3.4 -1.5 Z" fill="#FFFFFF" opacity={0.6} />
        <Path d="M248 300 l1.5 3.4 L253 305 l-3.4 1.5 L248 310 l-1.5 -3.4 L243 305 l3.4 -1.5 Z" fill="#FFFFFF" opacity={0.5} />

        <Circle cx={138} cy={246} r={2.2} fill="#FFFFFF" opacity={0.35} />
        <Circle cx={230} cy={250} r={2} fill={gfColors.lime} opacity={0.7} />
        <Circle cx={322} cy={110} r={2} fill="#FFFFFF" opacity={0.3} />
        <Circle cx={58} cy={206} r={1.8} fill="#FFFFFF" opacity={0.3} />
        <Circle cx={204} cy={300} r={2} fill={gfColors.lime} opacity={0.6} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { width: "100%", maxWidth: 360, aspectRatio: 360 / 330, alignSelf: "center" },
});
