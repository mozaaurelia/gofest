import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Circle, Ellipse, G, Path, Rect } from "react-native-svg";

type Props = {
  width?: number;
  height?: number;
};

export default function TicketEmptyIllustration({ width = 340, height = 260 }: Props) {
  return (
    <View style={styles.wrap}>
      <Svg viewBox="0 0 340 230" width={width} height={height}>
        {/* clouds */}
        <G opacity={0.98}>
          {/* top cloud */}
          <Ellipse cx={188} cy={36} rx={26} ry={16} fill="#FFFFFF" />
          <Ellipse cx={168} cy={42} rx={18} ry={13} fill="#FFFFFF" />
          <Ellipse cx={206} cy={42} rx={18} ry={13} fill="#FFFFFF" />
          {/* left cloud — clipped */}
          <Ellipse cx={28} cy={66} rx={28} ry={17} fill="#FFFFFF" />
          <Ellipse cx={48} cy={58} rx={22} ry={15} fill="#FFFFFF" />
          <Ellipse cx={8} cy={58} rx={18} ry={13} fill="#FFFFFF" />
          {/* right cloud */}
          <Ellipse cx={286} cy={76} rx={30} ry={18} fill="#FFFFFF" />
          <Ellipse cx={266} cy={84} rx={20} ry={14} fill="#FFFFFF" />
          <Ellipse cx={306} cy={84} rx={20} ry={14} fill="#FFFFFF" />
        </G>

        {/* ground shadow */}
        <Ellipse cx={170} cy={174} rx={98} ry={20} fill="#9AC8F3" opacity={0.55} />

        {/* speech bubble yellow */}
        <G>
          <Circle cx={92} cy={78} r={32} fill="#FFD966" />
          {/* tail */}
          <Path d="M108 102 L122 118 L108 108 Z" fill="#FFD966" />
          {/* ticket inside */}
          <G rotation={-12} origin="92,78">
            <Rect x={72} y={62} width={42} height={28} rx={4} fill="#8EC9F5" stroke="#4A8FD6" strokeWidth={1.2} />
            {/* perforation */}
            <Circle cx={72} cy={76} r={3.2} fill="#FFD966" />
            <Circle cx={114} cy={76} r={3.2} fill="#FFD966" />
            {/* broken heart */}
            <Path
              d="M92 72 c-3 -3 -9 -1 -7 5 c1.2 3 7 7 7 7 c0 0 5.8 -4 7 -7 c2 -6 -4 -8 -7 -5 Z"
              fill="#E53935"
              stroke="#C62828"
              strokeWidth={0.8}
            />
            {/* crack */}
            <Path d="M92 71 L91 76 L93.5 80 L90 84" stroke="#FFFFFF" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" opacity={0.95} />
          </G>
        </G>

        {/* ticket box — main body */}
        <G>
          {/* bottom extrusion shadow */}
          <Rect x={120} y={174} width={128} height={8} rx={3} fill="#0F2E5E" opacity={0.9} />
          {/* right extrusion */}
          <Rect x={238} y={92} width={10} height={84} rx={3} fill="#0F2E5E" />
          {/* top highlight */}
          <Rect x={114} y={84} width={132} height={14} rx={7} fill="#2A5FA0" />
          {/* main rect */}
          <Rect x={112} y={92} width={132} height={84} rx={10} fill="#184A8A" stroke="#0F2E5E" strokeWidth={1.3} />
          {/* left ear */}
          <Path d="M112 118 L88 124 L112 134 Z" fill="#184A8A" stroke="#0F2E5E" strokeWidth={1.1} strokeLinejoin="round" />
          {/* tiny highlight on box */}
          <Rect x={126} y={98} width={28} height={4} rx={2} fill="#FFFFFF" opacity={0.08} />
        </G>

        {/* detached tickets — two stubs flying */}
        <G>
          <Rect x={250} y={102} width={58} height={18} rx={3} fill="#D6EAFD" stroke="#184A8A" strokeWidth={1.6} />
          <Path d="M284 102 L286 107 L283 112 L286 117 L284 120" stroke="#184A8A" strokeWidth={1.4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          {/* lines on stub */}
          <Rect x={256} y={109} width={18} height={2.2} rx={1} fill="#184A8A" opacity={0.7} />
          <Rect x={256} y={113.5} width={12} height={2.2} rx={1} fill="#184A8A" opacity={0.5} />

          <Rect x={250} y={130} width={58} height={18} rx={3} fill="#D6EAFD" stroke="#184A8A" strokeWidth={1.6} />
          <Path d="M284 130 L286 135 L283 140 L286 145 L284 148" stroke="#184A8A" strokeWidth={1.4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <Rect x={256} y={137} width={18} height={2.2} rx={1} fill="#184A8A" opacity={0.7} />
          <Rect x={256} y={141.5} width={12} height={2.2} rx={1} fill="#184A8A" opacity={0.5} />
          {/* connecting wires */}
          <Path d="M240 118 C248 120 248 126 256 128" stroke="#184A8A" strokeWidth={1.4} fill="none" strokeLinecap="round" />
          <Path d="M240 146 C248 148 248 154 256 156" stroke="#184A8A" strokeWidth={1.4} fill="none" strokeLinecap="round" />
          <Path d="M232 168 C236 172 242 172 248 168" stroke="#184A8A" strokeWidth={1.4} fill="none" strokeLinecap="round" />
        </G>

        {/* eyes — yellow rim */}
        <G>
          {/* top eye */}
          <Circle cx={150} cy={118} r={27} fill="#F6CF23" />
          <Circle cx={150} cy={118} r={24} fill="#FFFFFF" />
          {/* black half (right side) */}
          <Path d="M150 94 A24 24 0 0 1 150 142 A24 24 0 0 0 150 94" fill="#0A0A0A" />
          {/* yellow divider */}
          <Rect x={149} y={94} width={2.2} height={48} rx={1} fill="#F6CF23" />
          {/* highlight */}
          <Circle cx={158} cy={104} r={3.2} fill="#FFFFFF" opacity={0.95} />
          <Circle cx={156} cy={100} r={1.4} fill="#FFFFFF" opacity={0.9} />
          {/* lightning bolt */}
          <Path d="M154 112 L158 122 L154.5 122 L156.5 132 L151 121 L154.2 121 Z" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth={0.4} />

          {/* bottom eye */}
          <Circle cx={150} cy={158} r={27} fill="#F6CF23" />
          <Circle cx={150} cy={158} r={24} fill="#FFFFFF" />
          <Path d="M150 134 A24 24 0 0 1 150 182 A24 24 0 0 0 150 134" fill="#0A0A0A" />
          <Rect x={149} y={134} width={2.2} height={48} rx={1} fill="#F6CF23" />
          <Circle cx={158} cy={144} r={3.2} fill="#FFFFFF" opacity={0.95} />
          <Path d="M154 152 L158 162 L154.5 162 L156.5 172 L151 161 L154.2 161 Z" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth={0.4} />
        </G>

        {/* tiny red cheek / mouth */}
        <Ellipse cx={182} cy={138} rx={5.5} ry={7} fill="#C62828" stroke="#7A0B0B" strokeWidth={0.8} />
        <Ellipse cx={182} cy={136.5} rx={2} ry={2.4} fill="#FF6B6B" opacity={0.9} />

        {/* phone on ground */}
        <G rotation={-18} origin="194,190">
          <Rect x={160} y={176} width={68} height={38} rx={6} fill="#3AA0FF" stroke="#0F2E5E" strokeWidth={1.2} />
          <Rect x={165} y={181} width={58} height={28} rx={4} fill="#FFFFFF" />
          <Rect x={182} y={191} width={22} height={12} rx={2} fill="#3AA0FF" />
          <Path d="M186 194 L196 198 L192 202" stroke="#FFFFFF" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <Circle cx={170} cy={188} r={1.4} fill="#3AA0FF" opacity={0.6} />
        </G>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    justifyContent: "center",
  },
});
