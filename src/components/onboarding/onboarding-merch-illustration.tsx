import React from "react";
import { StyleSheet, View } from "react-native";
import Svg, {
  Circle,
  Defs,
  Ellipse,
  G,
  LinearGradient,
  Path,
  RadialGradient,
  Rect,
  Stop,
} from "react-native-svg";
import { MascotArt } from "@/components/brand/gofest-mascot";
import { gfColors } from "@/constants/gf-theme";

const NAVY = "#0F1B2E";
const OUTLINE = gfColors.brandBlueDark;
const FUR_AVATAR = gfColors.brandBlue;
const BLUE = gfColors.brandBlue;
const BLUE_LIGHT = gfColors.brandBlueLight;
const SKY = "#8FB8F5";
const ICE = "#CFE6FF";
const WHITE = "#FFFFFF";
const PHONE_BODY = gfColors.brandBlueDark;

export default function OnboardingMerchIllustration() {
  return (
    <View style={styles.wrap}>
      <Svg viewBox="0 0 380 380" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <Defs>
          <RadialGradient id="sceneGlow" cx="50%" cy="46%" r="58%">
            <Stop offset="0" stopColor={WHITE} stopOpacity={0.34} />
            <Stop offset="0.65" stopColor={WHITE} stopOpacity={0.1} />
            <Stop offset="1" stopColor={WHITE} stopOpacity={0} />
          </RadialGradient>
          <LinearGradient id="orb" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor={gfColors.brandBlueLight} />
            <Stop offset="0.55" stopColor={BLUE_LIGHT} />
            <Stop offset="1" stopColor={BLUE} />
          </LinearGradient>
          <LinearGradient id="screenHeader" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor={gfColors.brandBlueLight} />
            <Stop offset="1" stopColor={BLUE} />
          </LinearGradient>
        </Defs>

        <Circle cx={190} cy={190} r={180} fill="url(#sceneGlow)" />

        {/* ground shadows */}
        <Ellipse cx={74} cy={368} rx={50} ry={8} fill={NAVY} opacity={0.12} />
        <Ellipse cx={298} cy={371} rx={54} ry={8} fill={NAVY} opacity={0.12} />

        {/* phone */}
        <G transform="rotate(5 205 134)">
          <Rect x={160} y={46} width={102} height={192} rx={24} fill={OUTLINE} opacity={0.26} />
          <Rect x={154} y={38} width={102} height={192} rx={24} fill={PHONE_BODY} stroke={OUTLINE} strokeWidth={3.5} />
          <Rect x={161} y={45} width={88} height={178} rx={17} fill={WHITE} />

          {/* header */}
          <Path d="M161 62 Q161 45 178 45 L232 45 Q249 45 249 62 L249 105 L161 105 Z" fill="url(#screenHeader)" />
          <Rect x={171} y={56} width={28} height={5} rx={2.5} fill={WHITE} />
          <Rect x={171} y={64} width={18} height={3} rx={1.5} fill={WHITE} opacity={0.72} />
          <Circle cx={230} cy={60} r={6.5} fill={WHITE} opacity={0.92} />
          <Circle cx={230} cy={60} r={2.5} fill={BLUE} />

          {/* ticket card on screen */}
          <Rect x={171} y={112} width={68} height={86} rx={8} fill={WHITE} stroke={ICE} strokeWidth={2} />
          <Rect x={179} y={120} width={30} height={6} rx={3} fill={BLUE} />
          <Circle cx={228} cy={123} r={4} fill={ICE} />

          {/* qr */}
          <Rect x={179} y={134} width={52} height={48} rx={6} fill="#F4F9FF" />
          <Rect x={183} y={138} width={12} height={12} rx={2} fill="none" stroke={BLUE} strokeWidth={3} />
          <Rect x={187} y={142} width={4} height={4} fill={BLUE} />
          <Rect x={215} y={138} width={12} height={12} rx={2} fill="none" stroke={BLUE} strokeWidth={3} />
          <Rect x={219} y={142} width={4} height={4} fill={BLUE} />
          <Rect x={183} y={162} width={12} height={12} rx={2} fill="none" stroke={BLUE} strokeWidth={3} />
          <Rect x={187} y={166} width={4} height={4} fill={BLUE} />
          <Rect x={199} y={140} width={4} height={4} fill={BLUE} />
          <Rect x={207} y={140} width={4} height={4} fill={BLUE} />
          <Rect x={199} y={148} width={4} height={4} fill={BLUE} />
          <Rect x={207} y={156} width={4} height={4} fill={BLUE} />
          <Rect x={215} y={156} width={4} height={4} fill={BLUE} />
          <Rect x={223} y={148} width={4} height={4} fill={BLUE} />
          <Rect x={199} y={164} width={4} height={4} fill={BLUE} />
          <Rect x={207} y={172} width={4} height={4} fill={BLUE} />
          <Rect x={215} y={164} width={4} height={4} fill={BLUE} />
          <Rect x={223} y={172} width={4} height={4} fill={BLUE} />

          <Rect x={179} y={188} width={52} height={5} rx={2.5} fill={ICE} />
          <Rect x={179} y={197} width={24} height={6} rx={3} fill="#E3F1FF" />

          {/* notch + home indicator */}
          <Rect x={192} y={49} width={26} height={6} rx={3} fill={PHONE_BODY} />
          <Rect x={193} y={216} width={24} height={3.5} rx={1.75} fill={OUTLINE} opacity={0.22} />

          {/* side buttons */}
          <Rect x={257} y={82} width={3.5} height={28} rx={1.75} fill={PHONE_BODY} />
          <Rect x={150.5} y={74} width={3.5} height={18} rx={1.75} fill={PHONE_BODY} />
          <Rect x={150.5} y={98} width={3.5} height={18} rx={1.75} fill={PHONE_BODY} />
        </G>

        {/* lanyard straps */}
        <Path
          d="M94 126 C64 114 46 76 58 44 C68 16 102 14 114 38 C126 62 118 100 108 124"
          stroke={BLUE}
          strokeWidth={11}
          fill="none"
          strokeLinecap="round"
        />
        <Path
          d="M110 124 C88 100 78 60 92 36 C104 16 130 24 132 50 C134 76 126 104 118 122"
          stroke={gfColors.brandBlueLight}
          strokeWidth={9}
          fill="none"
          strokeLinecap="round"
        />
        <Path
          d="M96 108 C88 82 92 54 104 42"
          stroke={WHITE}
          strokeWidth={7}
          fill="none"
          strokeLinecap="round"
          opacity={0.9}
        />

        {/* id card */}
        <G transform="rotate(-8 97 186)">
          <Rect x={50} y={126} width={102} height={122} rx={14} fill={OUTLINE} opacity={0.16} />
          <Rect x={46} y={120} width={102} height={122} rx={14} fill={WHITE} stroke={BLUE} strokeWidth={3.5} />
          <Rect x={53} y={127} width={88} height={108} rx={10} fill="none" stroke={ICE} strokeWidth={2} />

          {/* clip */}
          <Rect x={90} y={110} width={22} height={16} rx={4} fill="#DCE9FA" stroke="#7FA8DD" strokeWidth={1.5} />
          <Rect x={96} y={114} width={10} height={7} rx={3} fill={OUTLINE} />
          <Circle cx={97} cy={132} r={4} fill="#EFF7FF" stroke="#9DBBE6" strokeWidth={1.5} />

          {/* avatar */}
          <Circle cx={97} cy={160} r={19} fill="#E3F1FF" stroke="#9DBBE6" strokeWidth={2} />
          <Circle cx={88} cy={151} r={3.2} fill={FUR_AVATAR} stroke={OUTLINE} strokeWidth={2} />
          <Circle cx={106} cy={151} r={3.2} fill={FUR_AVATAR} stroke={OUTLINE} strokeWidth={2} />
          <Path d="M87 154 C87 146 107 146 107 154" fill="none" stroke={OUTLINE} strokeWidth={3.5} strokeLinecap="round" />
          <Rect x={85} y={154} width={4.5} height={8} rx={2.25} fill={gfColors.brandBlueDark} stroke={OUTLINE} strokeWidth={1.5} />
          <Rect x={104.5} y={154} width={4.5} height={8} rx={2.25} fill={gfColors.brandBlueDark} stroke={OUTLINE} strokeWidth={1.5} />
          <Circle cx={97} cy={160} r={11.5} fill={FUR_AVATAR} stroke={OUTLINE} strokeWidth={2.5} />
          <Ellipse cx={97} cy={165} rx={7.5} ry={5} fill="#C7E4FF" />
          <Circle cx={93} cy={159} r={1.6} fill={OUTLINE} />
          <Circle cx={101} cy={159} r={1.6} fill={OUTLINE} />
          <Ellipse cx={97} cy={163.5} rx={2} ry={1.5} fill={OUTLINE} />
          <Path d="M93 167 Q97 170 101 167" fill="none" stroke={OUTLINE} strokeWidth={1.3} strokeLinecap="round" />

          {/* name + vip */}
          <Rect x={66} y={186} width={62} height={6} rx={3} fill="#DCE9FA" />
          <Rect x={72} y={196} width={50} height={4} rx={2} fill={ICE} />
          <Rect x={66} y={205} width={42} height={14} rx={7} fill={BLUE} />
          <Path d="M74 209 l1.2 2.8 2.8 1.2 -2.8 1.2 -1.2 2.8 -1.2 -2.8 -2.8 -1.2 2.8 -1.2 Z" fill={WHITE} />
          <Rect x={82} y={210.5} width={20} height={3} rx={1.5} fill={WHITE} opacity={0.9} />

          {/* barcode */}
          <Rect x={114} y={205} width={2} height={14} rx={1} fill="#9DBBE6" />
          <Rect x={118} y={205} width={1.5} height={14} rx={0.75} fill="#9DBBE6" />
          <Rect x={121.5} y={205} width={2.5} height={14} rx={1.25} fill="#9DBBE6" />
          <Rect x={126} y={205} width={1.5} height={14} rx={0.75} fill="#9DBBE6" />
          <Rect x={129.5} y={205} width={2} height={14} rx={1} fill="#9DBBE6" />
        </G>

        {/* lightstick */}
        <G transform="rotate(-10 322 160)">
          <Circle cx={322} cy={100} r={54} fill={SKY} opacity={0.25} />
          <Circle cx={322} cy={100} r={42} fill="#BBDCFF" opacity={0.3} />
          <Circle cx={322} cy={100} r={33} fill="url(#orb)" stroke={OUTLINE} strokeWidth={3.5} />
          <Circle cx={322} cy={100} r={25} fill="none" stroke={WHITE} strokeWidth={2.5} opacity={0.75} />
          <Path d="M322 86 L326 96 L336 100 L326 104 L322 114 L318 104 L308 100 L318 96 Z" fill={WHITE} />
          <Circle cx={322} cy={100} r={3} fill="#DCE9FA" />
          <Ellipse cx={310} cy={88} rx={7} ry={4} fill={WHITE} opacity={0.6} transform="rotate(-30 310 88)" />

          <Rect x={308} y={131} width={28} height={10} rx={3} fill="#DCE9FA" stroke="#7FA8DD" strokeWidth={2} />
          <Rect x={299} y={139} width={46} height={84} rx={16} fill={WHITE} stroke="#9DBBE6" strokeWidth={2.5} />
          <Rect x={305} y={147} width={34} height={6} rx={3} fill={BLUE} />
          <Rect x={309} y={160} width={26} height={2.5} rx={1.25} fill={ICE} />
          <Rect x={312} y={167} width={20} height={2.5} rx={1.25} fill={ICE} />
          <Circle cx={322} cy={182} r={5.5} fill="#EFF7FF" stroke="#7FA8DD" strokeWidth={2} />
          <Circle cx={322} cy={182} r={2} fill={BLUE} />
          <Rect x={307} y={216} width={30} height={9} rx={4.5} fill="#E3F1FF" />
        </G>

        {/* mascots */}
        <MascotArt variant="female" transform="translate(16 228) scale(0.72)" />
        <MascotArt variant="male" transform="translate(236 222) scale(0.76)" />

        {/* sparkles */}
        <Path d="M36 44 l2.2 5.8 L44 52 l-5.8 2.2 L36 60 l-2.2 -5.8 L28 52 l5.8 -2.2 Z" fill={WHITE} opacity={0.9} />
        <Path d="M346 46 l1.8 4.6 L353 52 l-4.6 1.8 L346 58 l-1.8 -4.6 L339 52 l4.6 -1.8 Z" fill={WHITE} opacity={0.85} />
        <Path d="M46 172 l1.4 3.6 L51 177 l-3.6 1.4 L46 182 l-1.4 -3.6 L41 177 l3.6 -1.4 Z" fill={BLUE_LIGHT} />
        <Path d="M190 16 l1.5 3.8 L195 21 l-3.8 1.5 L190 26 l-1.5 -3.8 L185 21 l3.8 -1.5 Z" fill={WHITE} opacity={0.9} />

        <Circle cx={24} cy={120} r={2.5} fill={WHITE} opacity={0.8} />
        <Circle cx={360} cy={120} r={2} fill="#BBDCFF" />
        <Circle cx={150} cy={30} r={2} fill={WHITE} opacity={0.9} />
        <Circle cx={236} cy={30} r={2.2} fill={BLUE_LIGHT} opacity={0.9} />
        <Circle cx={366} cy={252} r={2} fill={WHITE} opacity={0.7} />
        <Circle cx={140} cy={72} r={1.8} fill={WHITE} opacity={0.7} />
        <Circle cx={264} cy={76} r={1.8} fill={BLUE_LIGHT} opacity={0.8} />

        <Rect x={350} y={194} width={8} height={2.5} rx={1.25} fill={BLUE_LIGHT} />
        <Rect x={352.75} y={191.25} width={2.5} height={8} rx={1.25} fill={BLUE_LIGHT} />
        <Rect x={132} y={64} width={4} height={9} rx={2} fill={WHITE} opacity={0.85} transform="rotate(22 134 68)" />
        <Rect x={252} y={88} width={9} height={4} rx={2} fill={WHITE} opacity={0.7} transform="rotate(-18 256 90)" />

        <Path d="M126 40 q6 -6 12 0" stroke={WHITE} strokeWidth={2.5} fill="none" strokeLinecap="round" opacity={0.8} />
        <Path d="M250 22 q5 6 10 0" stroke={WHITE} strokeWidth={2} fill="none" strokeLinecap="round" opacity={0.7} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { width: "100%", maxWidth: 360, aspectRatio: 1, alignSelf: "center" },
});
