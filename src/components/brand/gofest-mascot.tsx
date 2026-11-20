import React from "react";
import Svg, { Circle, Ellipse, G, Path, Rect } from "react-native-svg";
import { gfColors } from "@/constants/gf-theme";

const OUTLINE = gfColors.brandBlueDark;
const FUR = gfColors.brandBlue;
const FUR_DARK = gfColors.brandBlueDark;
const FUR_LIGHT = gfColors.brandBlueLight;
const BELLY = "#C7E4FF";
const WHITE = "#FFFFFF";
const BLUE = "#1263E4";
const PINK = "#FF7D96";
const BLUSH = "#FF9DB4";

export type MascotVariant = "female" | "male";
export type MascotMood = "happy" | "sad";

type ArtProps = {
  variant?: MascotVariant;
  mood?: MascotMood;
  transform?: string;
};

export function MascotArt({ variant = "male", mood = "happy", transform }: ArtProps) {
  const isFemale = variant === "female";
  const isSad = mood === "sad";

  return (
    <G transform={transform}>
      {/* tail */}
      <Path
        d="M108 148 C138 152 158 136 154 116 C151 102 140 100 138 110 C136 120 132 126 118 128 C108 130 104 140 108 148 Z"
        fill={FUR}
        stroke={OUTLINE}
        strokeWidth={4}
        strokeLinejoin="round"
      />

      {/* body */}
      <Path
        d="M80 90 C108 90 122 112 122 140 C122 168 104 184 80 184 C56 184 38 168 38 140 C38 112 52 90 80 90 Z"
        fill={FUR}
        stroke={OUTLINE}
        strokeWidth={4.5}
        strokeLinejoin="round"
      />
      <Ellipse cx={80} cy={146} rx={27} ry={31} fill={BELLY} />

      {/* feet */}
      <Ellipse cx={57} cy={184} rx={17} ry={9} fill={FUR} stroke={OUTLINE} strokeWidth={4} />
      <Ellipse cx={103} cy={184} rx={17} ry={9} fill={FUR} stroke={OUTLINE} strokeWidth={4} />
      <Path d="M51 181 L51 189 M59 180 L59 189" stroke={OUTLINE} strokeWidth={2} strokeLinecap="round" />
      <Path d="M101 180 L101 189 M109 181 L109 189" stroke={OUTLINE} strokeWidth={2} strokeLinecap="round" />

      {/* ears */}
      <Circle cx={38} cy={28} r={12} fill={FUR} stroke={OUTLINE} strokeWidth={4} />
      <Circle cx={122} cy={28} r={12} fill={FUR} stroke={OUTLINE} strokeWidth={4} />
      <Circle cx={38} cy={29} r={5.5} fill={BELLY} opacity={0.85} />
      <Circle cx={122} cy={29} r={5.5} fill={BELLY} opacity={0.85} />

      {/* head */}
      <Ellipse cx={80} cy={66} rx={50} ry={46} fill={FUR} stroke={OUTLINE} strokeWidth={4.5} />
      <Ellipse cx={80} cy={84} rx={37} ry={23} fill={BELLY} />

      {/* eyes */}
      <Ellipse cx={62} cy={62} rx={6.5} ry={8.5} fill={OUTLINE} />
      <Ellipse cx={98} cy={62} rx={6.5} ry={8.5} fill={OUTLINE} />
      <Circle cx={64.5} cy={58} r={2.3} fill={WHITE} />
      <Circle cx={100.5} cy={58} r={2.3} fill={WHITE} />

      {/* brows */}
      {isSad ? (
        <>
          <Path d="M53 49 Q59 43 66 44" stroke={BELLY} strokeWidth={4} fill="none" strokeLinecap="round" />
          <Path d="M94 44 Q101 43 107 49" stroke={BELLY} strokeWidth={4} fill="none" strokeLinecap="round" />
        </>
      ) : (
        <>
          <Path d="M53 47 Q59 43 65 46" stroke={BELLY} strokeWidth={4} fill="none" strokeLinecap="round" />
          <Path d="M95 46 Q101 43 107 47" stroke={BELLY} strokeWidth={4} fill="none" strokeLinecap="round" />
        </>
      )}

      {/* nose + mouth */}
      <Ellipse cx={80} cy={73} rx={8.5} ry={6.5} fill={OUTLINE} />
      {isSad ? (
        <Path d="M67 87 Q80 74 93 87" stroke={OUTLINE} strokeWidth={4} fill="none" strokeLinecap="round" />
      ) : (
        <>
          <Path d="M66 80 Q80 97 94 80 Q80 87 66 80 Z" fill={OUTLINE} />
          <Ellipse cx={80} cy={88} rx={8} ry={4.5} fill={PINK} />
        </>
      )}
      {isSad ? (
        <Path d="M101 69 C96 76 96 80 101 83 C106 80 106 76 101 69 Z" fill="#8FD8FF" stroke={WHITE} strokeWidth={1} />
      ) : null}

      {/* whiskers */}
      <Path d="M40 76 L52 74 M38 84 L52 84 M41 92 L53 90" stroke={OUTLINE} strokeWidth={2.5} strokeLinecap="round" />
      <Path d="M120 76 L108 74 M122 84 L108 84 M119 92 L107 90" stroke={OUTLINE} strokeWidth={2.5} strokeLinecap="round" />

      {/* headphones */}
      <Path d="M30 50 C30 2 130 2 130 50" fill="none" stroke={OUTLINE} strokeWidth={11} strokeLinecap="round" />
      <Path d="M36 44 C40 12 120 12 124 44" fill="none" stroke={FUR_DARK} strokeWidth={5} strokeLinecap="round" />
      <Path d="M48 24 C60 14 100 14 112 24" fill="none" stroke={FUR_LIGHT} strokeWidth={2.5} strokeLinecap="round" opacity={0.9} />
      <Rect x={13} y={40} width={27} height={42} rx={13} fill={FUR_DARK} stroke={OUTLINE} strokeWidth={4} />
      <Rect x={19} y={46} width={15} height={30} rx={7.5} fill={gfColors.brandBlueLight} />
      <Path d="M24 50 Q22 58 24 68" stroke={WHITE} strokeWidth={2.5} fill="none" strokeLinecap="round" opacity={0.55} />
      <Rect x={120} y={40} width={27} height={42} rx={13} fill={FUR_DARK} stroke={OUTLINE} strokeWidth={4} />
      <Rect x={126} y={46} width={15} height={30} rx={7.5} fill={gfColors.brandBlueLight} />
      <Path d="M136 50 Q138 58 136 68" stroke={WHITE} strokeWidth={2.5} fill="none" strokeLinecap="round" opacity={0.55} />

      {/* left arm and paw */}
      {isSad ? (
        <>
          <Rect
            x={31}
            y={101}
            width={14}
            height={39}
            rx={7}
            fill={FUR}
            stroke={OUTLINE}
            strokeWidth={4}
            transform="rotate(14 38 120.5)"
          />
          <Circle cx={29} cy={145} r={13.5} fill={FUR} stroke={OUTLINE} strokeWidth={4} />
          <Ellipse cx={29} cy={149} rx={7} ry={5.5} fill={BELLY} />
        </>
      ) : (
        <>
          <Rect
            x={24.5}
            y={86}
            width={15}
            height={46}
            rx={7.5}
            fill={FUR}
            stroke={OUTLINE}
            strokeWidth={4}
            transform="rotate(-34 32 109)"
          />
          <Circle cx={18} cy={88} r={13.5} fill={FUR} stroke={OUTLINE} strokeWidth={4} />
          <Ellipse cx={18} cy={92} rx={7} ry={5.5} fill={BELLY} />
          <Circle cx={8} cy={80} r={2.6} fill={BELLY} />
          <Circle cx={15} cy={76} r={2.8} fill={BELLY} />
          <Circle cx={22} cy={80} r={2.6} fill={BELLY} />

          <Rect
            x={16.5}
            y={93}
            width={18}
            height={9}
            rx={4.5}
            fill={WHITE}
            stroke={OUTLINE}
            strokeWidth={3}
            transform="rotate(-34 25.5 97.5)"
          />
          <Rect x={20} y={94.5} width={4} height={6} rx={1.5} fill={BLUE} transform="rotate(-34 25.5 97.5)" />
          <Rect x={27} y={94.5} width={4} height={6} rx={1.5} fill={BLUE} transform="rotate(-34 25.5 97.5)" />

          <Path
            d="M6 62 L12 68 M10 54 L15 61 M20 50 L22 58"
            stroke={OUTLINE}
            strokeWidth={3}
            strokeLinecap="round"
            opacity={0.4}
          />
        </>
      )}

      {/* right arm and optional ticket */}
      <Rect
        x={112}
        y={116}
        width={15}
        height={42}
        rx={7.5}
        fill={FUR}
        stroke={OUTLINE}
        strokeWidth={4}
        transform="rotate(10 120 137)"
      />
      <Circle cx={128} cy={158} r={12} fill={FUR} stroke={OUTLINE} strokeWidth={4} />
      <Ellipse cx={128} cy={160} rx={6} ry={4.5} fill={BELLY} />
      {isSad ? null : (
        <G transform="rotate(-8 126 164)">
          <Rect x={102} y={148} width={48} height={32} rx={5} fill={WHITE} stroke={BLUE} strokeWidth={3} />
          <Path d="M116 152 L116 176" stroke="#8FB8F5" strokeWidth={2} strokeDasharray="3 3" />
          <Rect x={106} y={155} width={6} height={3} rx={1.5} fill={BLUE} />
          <Rect x={106} y={162} width={8} height={3} rx={1.5} fill={BLUE} />
          <Path d="M135 157 l1.6 3.8 3.8 1.6 -3.8 1.6 -1.6 3.8 -1.6 -3.8 -3.8 -1.6 3.8 -1.6 Z" fill={BLUE} />
        </G>
      )}

      {/* female details */}
      {isFemale ? (
        <>
          <Ellipse cx={48} cy={83} rx={8} ry={5} fill={BLUSH} opacity={0.9} />
          <Ellipse cx={112} cy={83} rx={8} ry={5} fill={BLUSH} opacity={0.9} />
          <Path d="M56 54 L51 50 M58 50 L54 46" stroke={OUTLINE} strokeWidth={2.2} strokeLinecap="round" />
          <Path d="M104 54 L109 50 M102 50 L106 46" stroke={OUTLINE} strokeWidth={2.2} strokeLinecap="round" />
        </>
      ) : null}
    </G>
  );
}

type Props = {
  variant?: MascotVariant;
  mood?: MascotMood;
  width?: number;
};

export default function GoFestMascot({ variant = "male", mood = "happy", width = 160 }: Props) {
  return (
    <Svg width={width} height={width * 1.25} viewBox="0 0 160 200">
      <MascotArt variant={variant} mood={mood} />
    </Svg>
  );
}
