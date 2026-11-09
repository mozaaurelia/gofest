import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Circle, Ellipse, G, Path, Rect } from "react-native-svg";
import { gfColors } from "@/constants/gf-theme";

const GLASS_LIGHT = "#7BD4E4";
const PINK = "#FF5C8A";
const PINK_DARK = "#F0477A";
const YELLOW = "#FFC94D";
const ORANGE = "#FF9F43";
const BLUE = "#2E7BE8";
const BLUE_SOFT = "#BBDCFF";
const CARD_BG = "#E3F1FF";
const INK = "#1B222D";
const PHONE_BODY = "#3A4150";
const PHONE_FRAME = "#4A5263";
const PHONE_SCREEN = "#2E3542";

export default function OnboardingMerchIllustration() {
  return (
    <View style={styles.wrap}>
      <Svg viewBox="0 0 360 340" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        {/* phone */}
        <G transform="rotate(6 204 200)">
          <Rect x={150} y={100} width={104} height={204} rx={20} fill={INK} opacity={0.35} />
          <Rect x={146} y={88} width={104} height={204} rx={20} fill={PHONE_BODY} stroke={INK} strokeWidth={3} />
          <Rect x={153} y={95} width={90} height={190} rx={15} fill={PHONE_FRAME} />
          <Rect x={157} y={99} width={82} height={182} rx={12} fill={PHONE_SCREEN} />
          <Path d="M198 99 L239 99 L188 281 L157 281 Z" fill="#FFFFFF" opacity={0.05} />
          <Path d="M157 99 L170 99 L157 240 Z" fill="#FFFFFF" opacity={0.04} />

          {/* camera module */}
          <Rect x={162} y={106} width={46} height={48} rx={11} fill="#232A36" stroke="#5A6572" strokeWidth={1.2} />
          <Circle cx={175} cy={119} r={7.5} fill="#10151D" stroke="#5A6572" strokeWidth={1.4} />
          <Circle cx={175} cy={119} r={3} fill={gfColors.teal} opacity={0.6} />
          <Circle cx={195} cy={121} r={7.5} fill="#10151D" stroke="#5A6572" strokeWidth={1.4} />
          <Circle cx={195} cy={121} r={3} fill={gfColors.lime} opacity={0.4} />
          <Circle cx={178} cy={140} r={6} fill="#10151D" stroke="#5A6572" strokeWidth={1.2} />
          <Circle cx={196} cy={139} r={3} fill="#E2E5EA" />

          {/* side buttons */}
          <Rect x={250} y={128} width={3} height={30} rx={1.5} fill={PHONE_SCREEN} />
          <Rect x={143} y={118} width={3} height={22} rx={1.5} fill={PHONE_SCREEN} />
          <Rect x={143} y={146} width={3} height={22} rx={1.5} fill={PHONE_SCREEN} />
        </G>

        {/* lanyard straps */}
        <Path
          d="M104 172 C72 160 54 110 70 78 C84 48 120 50 130 78 C140 104 132 142 122 170"
          stroke={PINK_DARK}
          strokeWidth={11}
          fill="none"
          strokeLinecap="round"
        />
        <Path
          d="M116 170 C88 140 76 96 92 68 C106 44 136 58 140 88 C143 112 136 142 127 168"
          stroke={YELLOW}
          strokeWidth={9}
          fill="none"
          strokeLinecap="round"
        />
        <Path
          d="M98 124 C96 96 108 66 124 62"
          stroke={gfColors.teal}
          strokeWidth={7}
          fill="none"
          strokeLinecap="round"
          opacity={0.9}
        />

        {/* badge / id card */}
        <G transform="rotate(-7 104 234)">
          <Rect x={92} y={158} width={26} height={16} rx={4} fill="#C2C8D0" stroke="#8A93A3" strokeWidth={1.4} />
          <Rect x={98} y={162} width={14} height={7} rx={3} fill={INK} />

          <Rect x={52} y={170} width={104} height={124} rx={12} fill={CARD_BG} stroke={BLUE} strokeWidth={3} />
          <Rect x={60} y={178} width={88} height={108} rx={8} fill="none" stroke={BLUE_SOFT} strokeWidth={2} />

          <Rect x={70} y={186} width={68} height={66} rx={8} fill="#FFFFFF" stroke={BLUE} strokeWidth={2} />
          <Rect x={73} y={189} width={62} height={60} rx={6} fill="#FFF3C4" />

          {/* avatar */}
          <Path
            d="M100 200 q-13 0 -13 12 q0 8 4 11 l0 -8 q1 -8 9 -8 q8 0 9 8 l0 8 q4 -3 4 -11 q0 -12 -13 -12 Z"
            fill={INK}
          />
          <Circle cx={100} cy={213} r={10} fill="#F2C9A0" />
          <Path d="M90 207 q10 -7 20 0 q-10 -3 -20 0 Z" fill={INK} />
          <Rect x={96} y={221} width={8} height={6} fill="#E3B389" />
          <Path d="M84 240 q0 -11 16 -11 q16 0 16 11 v8 h-32 Z" fill={ORANGE} />
          <Path d="M92 230 q8 5 16 0" stroke={PINK} strokeWidth={3} fill="none" strokeLinecap="round" />

          {/* name & ticket number */}
          <Rect x={66} y={258} width={76} height={11} rx={2} fill="#FFFFFF" stroke={BLUE_SOFT} strokeWidth={1} />
          <Rect x={82} y={262} width={44} height={3} rx={1.5} fill="#5A86C9" />
          <Rect x={66} y={272} width={76} height={11} rx={2} fill="#FFFFFF" stroke={BLUE_SOFT} strokeWidth={1} />
          <Rect x={86} y={276} width={36} height={3} rx={1.5} fill="#5A86C9" />
        </G>

        {/* lightstick */}
        <G transform="rotate(-14 286 250)">
          <Circle cx={290} cy={188} r={47} fill={PINK} opacity={0.2} />
          <Circle cx={290} cy={188} r={42} fill={PINK} />
          <Circle cx={290} cy={188} r={42} fill="none" stroke="#FFB3C9" strokeWidth={2} opacity={0.7} />
          <Circle cx={290} cy={188} r={33} fill="#FF85A8" opacity={0.9} />
          <Path
            d="M262 198 q12 18 34 12 q20 -6 22 -24"
            stroke="#FFE0E9"
            strokeWidth={5}
            fill="none"
            strokeLinecap="round"
            opacity={0.85}
          />
          <Circle cx={288} cy={184} r={13} fill={YELLOW} opacity={0.95} />
          <Circle cx={288} cy={184} r={6} fill="#FFF6D6" />
          <Ellipse cx={276} cy={172} rx={10} ry={6} fill="#FFFFFF" opacity={0.6} />

          <Rect x={281} y={224} width={18} height={10} fill="#C2C8D0" />
          <Rect x={270} y={230} width={34} height={86} rx={12} fill="#E2E5EA" stroke="#C2C8D0" strokeWidth={2} />
          <Rect x={274} y={310} width={26} height={12} rx={6} fill="#DADCE0" />
          <Rect x={274} y={240} width={26} height={6} rx={3} fill={PINK} />
          <Rect x={280} y={254} width={14} height={2.5} rx={1.25} fill="#8A93A3" />
          <Rect x={283} y={261} width={8} height={2.5} rx={1.25} fill="#8A93A3" />
          <Rect x={279} y={272} width={16} height={10} rx={5} fill="none" stroke="#8A93A3" strokeWidth={1.2} />
          <Circle cx={287} cy={277} r={1.6} fill="#8A93A3" />
        </G>

        {/* sparkles & confetti */}
        <Path d="M70 48 l2.4 5.6 L78 56 l-5.6 2.4 L70 64 l-2.4 -5.6 L62 56 l5.6 -2.4 Z" fill={gfColors.lime} />
        <Path d="M152 44 l1.9 4.4 L158 50 l-4.1 1.9 L152 56 l-1.9 -4.1 L146 50 l4.1 -1.9 Z" fill={GLASS_LIGHT} />
        <Path d="M310 78 l2 4.6 L316 84 l-4.6 2 L310 90 l-2 -4.6 L304 84 l4.6 -2 Z" fill={gfColors.lime} />
        <Path d="M332 138 l2.2 5 L339 145 l-5 2.2 L332 152 l-2.2 -5 L325 145 l5 -2.2 Z" fill={GLASS_LIGHT} />
        <Path d="M48 128 l1.6 3.8 L54 133 l-3.8 1.6 L48 138 l-1.6 -3.8 L42 133 l3.8 -1.6 Z" fill={YELLOW} opacity={0.9} />
        <Path d="M244 54 l1.9 4.4 L250 60 l-4.1 1.9 L244 66 l-1.9 -4.1 L238 60 l4.1 -1.9 Z" fill={gfColors.green} />
        <Path d="M298 118 l1.5 3.4 L303 123 l-3.4 1.5 L298 128 l-1.5 -3.4 L293 123 l3.4 -1.5 Z" fill={PINK} opacity={0.8} />

        <Rect x={118} y={58} width={5} height={12} rx={2.5} fill={gfColors.teal} transform="rotate(24 120 64)" />
        <Rect x={192} y={36} width={12} height={5} rx={2.5} fill={gfColors.lime} transform="rotate(-18 198 38)" />
        <Rect x={270} y={54} width={5} height={11} rx={2.5} fill={gfColors.green} transform="rotate(12 272 60)" />
        <Rect x={326} y={182} width={5} height={11} rx={2.5} fill={gfColors.lime} transform="rotate(-20 328 188)" />
        <Rect x={34} y={166} width={10} height={4} rx={2} fill={gfColors.teal} transform="rotate(15 39 168)" />
        <Rect x={136} y={68} width={4} height={9} rx={2} fill={gfColors.green} transform="rotate(-30 138 72)" />
        <Rect x={248} y={80} width={9} height={4} rx={2} fill={PINK} transform="rotate(30 252 82)" />
        <Rect x={314} y={222} width={9} height={4} rx={2} fill={gfColors.teal} opacity={0.85} transform="rotate(-25 318 224)" />
        <Rect x={58} y={210} width={4} height={9} rx={2} fill={YELLOW} opacity={0.8} transform="rotate(20 60 214)" />
        <Rect x={318} y={56} width={5} height={11} rx={2.5} fill={YELLOW} transform="rotate(-14 320 62)" />
        <Rect x={30} y={198} width={9} height={4} rx={2} fill={PINK} opacity={0.85} transform="rotate(-22 34 200)" />

        <Path d="M148 76 q6 -6 12 0 q6 6 12 0" stroke={gfColors.lime} strokeWidth={2} fill="none" strokeLinecap="round" />
        <Path d="M232 68 q5 6 10 0" stroke={GLASS_LIGHT} strokeWidth={2} fill="none" strokeLinecap="round" />
        <Path d="M34 148 q4 4 8 0 q4 -4 8 0" stroke={PINK} strokeWidth={1.6} fill="none" strokeLinecap="round" opacity={0.5} />

        <Circle cx={118} cy={96} r={2.5} fill={gfColors.green} opacity={0.75} />
        <Circle cx={336} cy={108} r={2} fill={YELLOW} opacity={0.9} />
        <Circle cx={54} cy={90} r={2} fill={gfColors.teal} />
        <Circle cx={258} cy={96} r={1.8} fill={PINK} opacity={0.6} />
        <Circle cx={342} cy={250} r={2.4} fill={gfColors.lime} opacity={0.7} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { width: "100%", maxWidth: 360, aspectRatio: 360 / 340, alignSelf: "center" },
});
