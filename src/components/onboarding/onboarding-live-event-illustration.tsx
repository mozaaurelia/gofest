import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle, ClipPath, Defs, Ellipse, G, Path, Rect } from "react-native-svg";
import { gfColors } from "@/constants/gf-theme";

const CROWD_BACK = "#242F55";
const CROWD_FRONT = "#141C33";
const GLASS_LIGHT = "#7BD4E4";

type StickProps = {
  x: number;
  y: number;
  angle: number;
  color: string;
  length?: number;
};

function GlowStick({ x, y, angle, color, length = 54 }: StickProps) {
  return (
    <G transform={`rotate(${angle} ${x} ${y})`}>
      <Circle cx={x} cy={y - length * 0.6} r={26} fill={color} opacity={0.2} />
      <Circle cx={x} cy={y - length * 0.6} r={14} fill={color} opacity={0.18} />
      <Rect x={x - 5} y={y - length} width={10} height={length} rx={5} fill={color} />
      <Rect x={x - 2} y={y - length + 6} width={4} height={length - 12} rx={2} fill="#FFFFFF" opacity={0.55} />
    </G>
  );
}

type HandProps = {
  x: number;
  y: number;
  angle: number;
  color: string;
};

function RaisedHand({ x, y, angle, color }: HandProps) {
  return (
    <G transform={`rotate(${angle} ${x} ${y})`} fill={color}>
      <Rect x={x - 11} y={y - 6} width={22} height={64} rx={11} />
      <Rect x={x - 12} y={y - 22} width={24} height={30} rx={10} />
      <Rect x={x - 18} y={y - 12} width={8} height={18} rx={4} transform={`rotate(-30 ${x - 14} ${y - 3})`} />
      <Rect x={x + 10} y={y - 16} width={7} height={16} rx={3.5} transform={`rotate(26 ${x + 13} ${y - 8})`} />
    </G>
  );
}

export default function OnboardingLiveEventIllustration() {
  return (
    <View style={styles.wrap}>
      <Svg viewBox="0 0 360 360" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <Defs>
          <ClipPath id="discoBall">
            <Circle cx={180} cy={100} r={60} />
          </ClipPath>
        </Defs>

        {/* confetti burst */}
        <Path d="M40 60 q10 -10 18 2" stroke={gfColors.lime} strokeWidth={6} fill="none" strokeLinecap="round" />
        <Path d="M310 55 q8 10 -2 16" stroke={gfColors.teal} strokeWidth={6} fill="none" strokeLinecap="round" />
        <Path d="M72 152 q12 2 14 14" stroke={GLASS_LIGHT} strokeWidth={6} fill="none" strokeLinecap="round" />
        <Path d="M292 156 q-10 6 -18 -4" stroke={gfColors.green} strokeWidth={6} fill="none" strokeLinecap="round" />
        <Path d="M120 40 q6 -8 14 -2" stroke="#FFFFFF" strokeWidth={5} fill="none" strokeLinecap="round" opacity={0.7} />
        <Path d="M250 34 q10 4 8 14" stroke={gfColors.lime} strokeWidth={5} fill="none" strokeLinecap="round" />
        <Path d="M332 108 q-8 10 -16 4" stroke="#FFFFFF" strokeWidth={5} fill="none" strokeLinecap="round" opacity={0.5} />
        <Path d="M28 122 q8 8 4 16" stroke={gfColors.green} strokeWidth={5} fill="none" strokeLinecap="round" />

        <Path d="M52 90 l2.4 5.6 L60 98 l-5.6 2.4 L52 106 l-2.4 -5.6 L44 98 l5.6 -2.4 Z" fill={gfColors.lime} />
        <Path d="M150 26 l1.8 4.2 L156 32 l-4.2 1.8 L150 38 l-1.8 -4.2 L144 32 l4.2 -1.8 Z" fill="#FFFFFF" opacity={0.8} />
        <Path d="M208 22 l1.8 4.2 L214 28 l-4.2 1.8 L208 34 l-1.8 -4.2 L202 28 l4.2 -1.8 Z" fill={gfColors.lime} />
        <Path d="M322 84 l2.2 5 L329 91 l-5 2.2 L322 98 l-2.2 -5 L315 91 l5 -2.2 Z" fill={gfColors.teal} />
        <Path d="M300 188 l1.8 4.2 L306 194 l-4.2 1.8 L300 200 l-1.8 -4.2 L294 194 l4.2 -1.8 Z" fill="#FFFFFF" opacity={0.6} />
        <Path d="M58 188 l1.8 4.2 L64 194 l-4.2 1.8 L58 200 l-1.8 -4.2 L52 194 l4.2 -1.8 Z" fill={gfColors.teal} />
        <Path d="M252 148 l1.8 4.2 L258 154 l-4.2 1.8 L252 160 l-1.8 -4.2 L246 154 l4.2 -1.8 Z" fill={gfColors.lime} />
        <Path d="M100 26 l1.5 3.4 L105 31 l-3.4 1.5 L100 36 l-1.5 -3.4 L95 31 l3.4 -1.5 Z" fill="#FFFFFF" opacity={0.6} />

        <Rect x={70} y={116} width={6} height={10} rx={3} fill={gfColors.teal} transform="rotate(20 73 121)" />
        <Rect x={292} y={122} width={9} height={4} rx={2} fill={gfColors.lime} transform="rotate(-15 296 124)" />
        <Rect x={118} y={84} width={4} height={9} rx={2} fill={gfColors.green} transform="rotate(-25 120 88)" />
        <Rect x={246} y={96} width={5} height={5} rx={2.5} fill="#FFFFFF" opacity={0.5} transform="rotate(10 248 98)" />
        <Rect x={318} y={64} width={4} height={8} rx={2} fill={gfColors.teal} transform="rotate(30 320 68)" />
        <Rect x={40} y={142} width={9} height={4} rx={2} fill={gfColors.lime} transform="rotate(25 44 144)" />

        <Circle cx={90} cy={68} r={2.5} fill={gfColors.lime} />
        <Circle cx={272} cy={66} r={2.5} fill={gfColors.teal} />
        <Circle cx={34} cy={162} r={2} fill="#FFFFFF" opacity={0.35} />
        <Circle cx={336} cy={148} r={2} fill={gfColors.lime} opacity={0.7} />
        <Circle cx={140} cy={56} r={2} fill="#FFFFFF" opacity={0.35} />
        <Circle cx={226} cy={66} r={2.4} fill={GLASS_LIGHT} opacity={0.8} />

        {/* disco ball */}
        <Rect x={179} y={8} width={2} height={32} fill="#C2C8D0" opacity={0.5} />
        <Rect x={172} y={34} width={16} height={8} rx={2} fill="#C2C8D0" />
        <Circle cx={180} cy={100} r={74} fill="#EAF6FF" opacity={0.06} />
        <Circle cx={180} cy={100} r={60} fill="#AEB9CC" />
        <G clipPath="url(#discoBall)">
          <Ellipse cx={180} cy={100} rx={60} ry={15} fill="none" stroke="#7E8AA0" strokeWidth={1} opacity={0.7} />
          <Ellipse cx={180} cy={100} rx={60} ry={30} fill="none" stroke="#7E8AA0" strokeWidth={1} opacity={0.7} />
          <Ellipse cx={180} cy={100} rx={60} ry={45} fill="none" stroke="#7E8AA0" strokeWidth={1} opacity={0.7} />
          <Ellipse cx={180} cy={100} rx={15} ry={60} fill="none" stroke="#7E8AA0" strokeWidth={1} opacity={0.7} />
          <Ellipse cx={180} cy={100} rx={30} ry={60} fill="none" stroke="#7E8AA0" strokeWidth={1} opacity={0.7} />
          <Ellipse cx={180} cy={100} rx={45} ry={60} fill="none" stroke="#7E8AA0" strokeWidth={1} opacity={0.7} />
          <Circle cx={157} cy={77} r={34} fill="#FFFFFF" opacity={0.25} />
          <Circle cx={151} cy={70} r={16} fill="#FFFFFF" opacity={0.35} />
          <Circle cx={208} cy={126} r={44} fill="#5A6572" opacity={0.22} />
          <Rect x={148} y={68} width={8} height={8} fill={gfColors.lime} opacity={0.55} />
          <Rect x={196} y={86} width={7} height={7} fill={gfColors.teal} opacity={0.55} />
          <Rect x={158} y={122} width={6} height={6} fill={GLASS_LIGHT} opacity={0.5} />
          <Rect x={212} y={58} width={5} height={5} fill={gfColors.lime} opacity={0.5} />
          <Rect x={128} y={96} width={5} height={5} fill="#FFFFFF" opacity={0.5} />
        </G>
        <Circle cx={180} cy={100} r={60} fill="none" stroke="#E2E5EA" strokeWidth={2} opacity={0.8} />
        <Circle cx={180} cy={159} r={4} fill="#C2C8D0" />
        <Path d="M150 62 l2 4.6 L156 68 l-4.6 2 L150 74 l-2 -4.6 L144 68 l4.6 -2 Z" fill="#FFFFFF" opacity={0.9} />

        {/* crowd back layer */}
        <G fill={CROWD_BACK}>
          <Circle cx={30} cy={318} r={18} />
          <Rect x={8} y={330} width={44} height={30} rx={12} />
          <Circle cx={78} cy={300} r={16} />
          <Rect x={58} y={312} width={40} height={48} rx={12} />
          <Circle cx={130} cy={326} r={20} />
          <Rect x={104} y={340} width={52} height={20} rx={14} />
          <Circle cx={195} cy={316} r={17} />
          <Rect x={173} y={328} width={44} height={32} rx={12} />
          <Circle cx={252} cy={326} r={19} />
          <Rect x={228} y={340} width={48} height={20} rx={14} />
          <Circle cx={315} cy={306} r={18} />
          <Rect x={292} y={318} width={46} height={42} rx={12} />
          <Rect x={68} y={270} width={10} height={50} rx={5} />
          <Rect x={63} y={258} width={20} height={24} rx={9} />
          <Rect x={210} y={266} width={10} height={54} rx={5} />
          <Rect x={204} y={254} width={22} height={24} rx={9} />
          <Rect x={296} y={264} width={10} height={52} rx={5} />
          <Rect x={290} y={252} width={22} height={24} rx={9} />
        </G>

        {/* crowd front base */}
        <Path
          d="M0 360 L0 330 C18 320 34 326 44 338 C58 316 78 314 90 330 C100 312 120 308 132 322 C146 306 166 306 178 322 C192 310 210 312 220 326 C234 314 254 316 264 330 C280 318 300 322 310 336 C326 324 344 326 360 336 L360 360 Z"
          fill={CROWD_FRONT}
        />

        {/* glow sticks + raised hands */}
        <GlowStick x={50} y={286} angle={-18} color={gfColors.lime} />
        <RaisedHand x={50} y={300} angle={-8} color={CROWD_FRONT} />

        <GlowStick x={106} y={296} angle={14} color={gfColors.teal} />
        <RaisedHand x={106} y={312} angle={5} color={CROWD_FRONT} />

        <GlowStick x={168} y={278} angle={-6} color={gfColors.green} />
        <RaisedHand x={168} y={294} angle={-4} color={CROWD_FRONT} />

        <GlowStick x={222} y={286} angle={10} color={gfColors.lime} />
        <RaisedHand x={222} y={302} angle={3} color={CROWD_FRONT} />

        <GlowStick x={272} y={294} angle={-14} color={GLASS_LIGHT} />
        <RaisedHand x={272} y={310} angle={-6} color={CROWD_FRONT} />

        <GlowStick x={322} y={280} angle={8} color={gfColors.green} />
        <RaisedHand x={322} y={296} angle={8} color={CROWD_FRONT} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { width: "100%", maxWidth: 360, aspectRatio: 1, alignSelf: "center" },
});
