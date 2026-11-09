import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Path, Rect, Text as SvgText } from "react-native-svg";
import { gfColors } from "@/constants/gf-theme";

const INK = "#1B222D";
const CIRCLE_DARK = "#2E3B66";
const CIRCLE_LIGHT = "#E7EEF7";
const BAND_RING =
  "M66 166 a114 56 0 1 0 228 0 a114 56 0 1 0 -228 0 Z M104 166 a76 32 0 1 0 152 0 a76 32 0 1 0 -152 0 Z";

export default function OnboardingPaymentIllustration() {
  return (
    <View style={styles.wrap}>
      <Svg viewBox="0 0 360 300" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <Defs>
          <ClipPath id="wristbandRing">
            <Path d={BAND_RING} fillRule="evenodd" clipRule="evenodd" />
          </ClipPath>
        </Defs>

        {/* e-wallet */}
        <G>
          <Circle cx={78} cy={72} r={38} fill={CIRCLE_DARK} />
          <Rect x={74} y={54} width={13} height={8} rx={4} fill={CIRCLE_LIGHT} />
          <Rect x={58} y={60} width={44} height={30} rx={8} fill={gfColors.green} />
          <Rect x={58} y={64} width={44} height={8} fill="#5FAF33" />
          <Rect x={64} y={74} width={13} height={6} rx={3} fill="#EAF6FF" opacity={0.85} />
          <Path d="M84 68 q5 7 0 14" stroke="#EAF6FF" strokeWidth={2.2} fill="none" strokeLinecap="round" />
          <Path d="M90 65 q7 10 0 20" stroke="#EAF6FF" strokeWidth={2.2} fill="none" strokeLinecap="round" opacity={0.75} />
        </G>

        {/* credit card */}
        <G>
          <Circle cx={290} cy={84} r={33} fill={CIRCLE_DARK} />
          <Rect x={266} y={70} width={48} height={31} rx={6} fill={gfColors.lime} />
          <Rect x={266} y={78} width={48} height={6} fill={INK} opacity={0.85} />
          <Rect x={272} y={89} width={11} height={8} rx={2} fill="#EAF6FF" stroke={INK} strokeWidth={0.8} />
          <Path d="M300 89 q4 6 0 11" stroke={INK} strokeWidth={1.8} fill="none" strokeLinecap="round" opacity={0.65} />
          <Path d="M305 87 q6 8 0 15" stroke={INK} strokeWidth={1.8} fill="none" strokeLinecap="round" opacity={0.5} />
        </G>

        {/* QRIS */}
        <G>
          <Circle cx={96} cy={210} r={34} fill={CIRCLE_LIGHT} />
          <Path d="M76 196 h7 M76 196 v7" stroke={INK} strokeWidth={2} strokeLinecap="round" />
          <Path d="M116 196 h-7 M116 196 v7" stroke={INK} strokeWidth={2} strokeLinecap="round" />
          <Path d="M76 224 h7 M76 224 v-7" stroke={INK} strokeWidth={2} strokeLinecap="round" />
          <Path d="M116 224 h-7 M116 224 v-7" stroke={INK} strokeWidth={2} strokeLinecap="round" />
          <SvgText x={96} y={217} textAnchor="middle" fontSize={16} fontWeight="800" fill={INK} letterSpacing={0.5}>
            QRIS
          </SvgText>
        </G>

        {/* bank */}
        <G>
          <Circle cx={278} cy={214} r={38} fill={CIRCLE_LIGHT} />
          <Path d="M260 198 L278 187 L296 198 Z" fill={gfColors.teal} />
          <Rect x={260} y={200} width={36} height={5} rx={2} fill={gfColors.teal} />
          <Rect x={264} y={208} width={5} height={13} rx={1} fill={gfColors.teal} />
          <Rect x={272} y={208} width={5} height={13} rx={1} fill={gfColors.teal} />
          <Rect x={280} y={208} width={5} height={13} rx={1} fill={gfColors.teal} />
          <Rect x={288} y={208} width={5} height={13} rx={1} fill={gfColors.teal} />
          <Rect x={258} y={222} width={40} height={6} rx={3} fill="#248AA0" />
          <Circle cx={296} cy={191} r={9} fill={gfColors.lime} stroke="#5FAF33" strokeWidth={1.5} />
          <Circle cx={296} cy={191} r={4} fill="#EAF6FF" opacity={0.55} />
        </G>

        {/* wristband shadow */}
        <Ellipse cx={180} cy={184} rx={118} ry={50} fill="#10151D" opacity={0.22} />

        {/* wristband */}
        <G>
          <Path d={BAND_RING} fill={gfColors.teal} fillRule="evenodd" />
          <G clipPath="url(#wristbandRing)">
            <Rect x={64} y={90} width={19} height={160} fill={gfColors.lime} transform="rotate(14 73 170)" />
            <Rect x={85} y={90} width={10} height={160} fill={gfColors.green} transform="rotate(14 90 170)" />
            <Rect x={277} y={90} width={19} height={160} fill={gfColors.lime} transform="rotate(-14 286 170)" />
            <Rect x={265} y={90} width={10} height={160} fill={gfColors.green} transform="rotate(-14 270 170)" />
            <Rect x={112} y={120} width={7} height={100} fill="#EAF6FF" opacity={0.35} transform="rotate(14 115 170)" />
            <Rect x={241} y={120} width={7} height={100} fill="#EAF6FF" opacity={0.35} transform="rotate(-14 244 170)" />
          </G>
          <Path
            d="M71 166 a109 51 0 0 1 218 0"
            stroke="#7BD4E4"
            strokeWidth={3}
            fill="none"
            opacity={0.5}
          />
          <Path d="M71 166 a109 51 0 0 0 218 0" stroke="#10151D" strokeWidth={6} fill="none" opacity={0.16} />
          <Ellipse cx={180} cy={166} rx={76} ry={32} fill="none" stroke="#EAF6FF" strokeWidth={2} opacity={0.22} />
          <Ellipse cx={180} cy={166} rx={113} ry={55} fill="none" stroke="#248AA0" strokeWidth={2} opacity={0.35} />

          {/* clasp */}
          <Rect x={158} y={100} width={44} height={27} rx={9} fill="#C2C8D0" stroke="#8A93A3" strokeWidth={1.5} />
          <Rect x={164} y={107} width={32} height={13} rx={6} fill="#E2E5EA" />
          <Circle cx={180} cy={104} r={2.6} fill="#8A93A3" />
        </G>

        {/* QR tag */}
        <G>
          <Rect x={170} y={186} width={20} height={16} rx={4} fill="#C2C8D0" stroke="#8A93A3" strokeWidth={1.2} />
          <G transform="rotate(-2 180 226)">
            <Rect x={138} y={196} width={84} height={60} rx={8} fill="#FFFFFF" stroke="#C2C8D0" strokeWidth={1.5} />

            {/* QR finder patterns */}
            <Rect x={146} y={204} width={14} height={14} fill={INK} />
            <Rect x={148} y={206} width={10} height={10} fill="#FFFFFF" />
            <Rect x={150} y={208} width={6} height={6} fill={INK} />

            <Rect x={182} y={204} width={14} height={14} fill={INK} />
            <Rect x={184} y={206} width={10} height={10} fill="#FFFFFF" />
            <Rect x={186} y={208} width={6} height={6} fill={INK} />

            <Rect x={146} y={230} width={14} height={14} fill={INK} />
            <Rect x={148} y={232} width={10} height={10} fill="#FFFFFF" />
            <Rect x={150} y={234} width={6} height={6} fill={INK} />

            {/* QR modules */}
            <Rect x={164} y={204} width={4} height={4} fill={INK} />
            <Rect x={170} y={204} width={7} height={3} fill={INK} />
            <Rect x={164} y={211} width={3} height={6} fill={INK} />
            <Rect x={170} y={212} width={6} height={3} fill={INK} />
            <Rect x={164} y={220} width={5} height={4} fill={INK} />
            <Rect x={173} y={219} width={3} height={3} fill={INK} />
            <Rect x={180} y={220} width={3} height={5} fill={INK} />
            <Rect x={162} y={231} width={3} height={3} fill={INK} />
            <Rect x={167} y={236} width={6} height={3} fill={INK} />
            <Rect x={176} y={230} width={3} height={8} fill={INK} />
            <Rect x={181} y={232} width={7} height={3} fill={INK} />
            <Rect x={191} y={222} width={3} height={3} fill={INK} />
            <Rect x={198} y={204} width={3} height={6} fill={INK} />
            <Rect x={204} y={204} width={3} height={3} fill={INK} />
            <Rect x={198} y={213} width={9} height={3} fill={INK} />
            <Rect x={204} y={218} width={3} height={8} fill={INK} />
            <Rect x={197} y={222} width={5} height={4} fill={INK} />
            <Rect x={198} y={232} width={3} height={3} fill={INK} />
            <Rect x={204} y={237} width={3} height={6} fill={INK} />
            <Rect x={209} y={230} width={3} height={3} fill={INK} />
            <Rect x={191} y={240} width={8} height={3} fill={INK} />
          </G>
        </G>

        {/* sparkles & dots */}
        <Path d="M148 38 l1.8 4.2 L154 44 l-4.2 1.8 L148 50 l-1.8 -4.2 L142 44 l4.2 -1.8 Z" fill="#FFFFFF" opacity={0.7} />
        <Path d="M40 122 l1.5 3.4 L45 127 l-3.4 1.5 L40 132 l-1.5 -3.4 L35 127 l3.4 -1.5 Z" fill={gfColors.lime} opacity={0.9} />
        <Path d="M328 144 l1.8 4.2 L334 150 l-4.2 1.8 L328 156 l-1.8 -4.2 L322 150 l4.2 -1.8 Z" fill="#FFFFFF" opacity={0.6} />
        <Path d="M330 42 l1.5 3.4 L335 47 l-3.4 1.5 L330 52 l-1.5 -3.4 L325 47 l3.4 -1.5 Z" fill="#FFFFFF" opacity={0.5} />
        <Path d="M32 258 l1.5 3.4 L37 263 l-3.4 1.5 L32 268 l-1.5 -3.4 L27 263 l3.4 -1.5 Z" fill={gfColors.lime} opacity={0.8} />
        <Path d="M334 260 l1.5 3.4 L339 265 l-3.4 1.5 L334 270 l-1.5 -3.4 L329 265 l3.4 -1.5 Z" fill="#FFFFFF" opacity={0.5} />

        <Circle cx={128} cy={122} r={2} fill="#FFFFFF" opacity={0.35} />
        <Circle cx={238} cy={108} r={2.2} fill={gfColors.lime} opacity={0.7} />
        <Circle cx={44} cy={186} r={1.8} fill="#FFFFFF" opacity={0.3} />
        <Circle cx={322} cy={206} r={2} fill="#FFFFFF" opacity={0.35} />
        <Circle cx={154} cy={276} r={2} fill={gfColors.lime} opacity={0.6} />
        <Circle cx={222} cy={280} r={1.8} fill="#FFFFFF" opacity={0.3} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { width: "100%", maxWidth: 360, aspectRatio: 360 / 300, alignSelf: "center" },
});
