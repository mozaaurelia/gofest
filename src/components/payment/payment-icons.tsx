import React from "react";
import Svg, { Circle, Path, Rect } from "react-native-svg";

type IconProps = {
  size?: number;
  color?: string;
};

const GRAY = "#B8C0CC";

export function CreditCardIcon({ size = 24, color = GRAY }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Rect x={3} y={5.5} width={18} height={13} rx={3} fill={color} />
      <Rect x={3} y={9} width={18} height={3.4} fill="#FFFFFF" opacity={0.9} />
      <Rect x={6} y={14.2} width={5} height={2} rx={1} fill="#FFFFFF" opacity={0.9} />
    </Svg>
  );
}

export function VirtualAccountIcon({ size = 24, color = GRAY }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Rect x={3} y={5.5} width={15} height={11} rx={2.6} fill={color} />
      <Rect x={6} y={8.4} width={9} height={2} rx={1} fill="#FFFFFF" opacity={0.9} />
      <Rect x={6} y={11.8} width={5} height={1.8} rx={0.9} fill="#FFFFFF" opacity={0.9} />
      <Circle cx={17.8} cy={17.2} r={4.2} fill="#FFFFFF" />
      <Circle cx={17.8} cy={17.2} r={3.4} fill={color} />
      <Path d="M17.8 15.4v3.6M16 17.2h3.6" stroke="#FFFFFF" strokeWidth={1.4} strokeLinecap="round" />
    </Svg>
  );
}

export function PayLaterIcon({ size = 24, color = GRAY }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Rect x={3} y={5.5} width={15} height={11} rx={2.6} fill={color} />
      <Rect x={6} y={8.4} width={9} height={2} rx={1} fill="#FFFFFF" opacity={0.9} />
      <Circle cx={17.8} cy={17.2} r={4.2} fill="#FFFFFF" />
      <Circle cx={17.8} cy={17.2} r={3.4} fill={color} />
      <Path d="M17.8 15.5V17.2l1.4 1" stroke="#FFFFFF" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function QrIcon({ size = 24, color = GRAY }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Rect x={4} y={4} width={5.5} height={5.5} rx={1.4} stroke={color} strokeWidth={1.9} />
      <Rect x={14.5} y={4} width={5.5} height={5.5} rx={1.4} stroke={color} strokeWidth={1.9} />
      <Rect x={4} y={14.5} width={5.5} height={5.5} rx={1.4} stroke={color} strokeWidth={1.9} />
      <Path d="M14.5 14.5h2.4v2.4h-2.4zM17.6 17.6h2.4v2.4h-2.4z" fill={color} />
      <Path d="M14.5 20v-2.4M20 14.5v2.4" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
    </Svg>
  );
}

export function InstallmentIcon({ size = 24, color = GRAY }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Rect x={3} y={5.5} width={15} height={11} rx={2.6} fill={color} />
      <Rect x={6} y={8.4} width={9} height={2} rx={1} fill="#FFFFFF" opacity={0.9} />
      <Circle cx={17.8} cy={17.2} r={4.2} fill="#FFFFFF" />
      <Circle cx={17.8} cy={17.2} r={3.4} fill={color} />
      <Path d="M17.8 15.5V17.2l1.4 1" stroke="#FFFFFF" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function ChevronDownIcon({ size = 20, color = "#111827" }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M6 9.5l6 6 6-6" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function ChevronRightIcon({ size = 20, color = "#111827" }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M9.5 6l6 6-6 6" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function CheckIcon({ size = 18, color = "#FFFFFF" }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M5.5 12.5l4.2 4.2L18.5 8" stroke={color} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function ShieldLockIcon({ size = 26, color = "#EA580C" }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M12 3.2l7 3.7v5.2c0 4.3-2.8 7.3-7 8.9-4.2-1.6-7-4.6-7-8.9V6.9l7-3.7Z" fill={color} />
      <Rect x={9.2} y={10.6} width={5.6} height={4.4} rx={1.2} fill="#FFFFFF" />
      <Path d="M10.4 10.6V9.4a1.6 1.6 0 0 1 3.2 0v1.2" stroke="#FFFFFF" strokeWidth={1.3} />
    </Svg>
  );
}

export function PromoTicketIcon({ size = 26, color = "#FFFFFF" }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M4 8.2h16v2.4a1.9 1.9 0 0 0 0 3.8v2.4H4v-2.4a1.9 1.9 0 0 0 0-3.8V8.2Z" fill={color} />
      <Path d="M8.5 11h7" stroke="#2FA8C0" strokeWidth={1.5} strokeLinecap="round" strokeDasharray="2 2" />
    </Svg>
  );
}

export function TrophyIcon({ size = 14, color = "#FFFFFF" }: IconProps) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M8 4h8v4.5a4 4 0 0 1-8 0V4Z" fill={color} />
      <Path d="M8 5.5H5.5v1.8A3.2 3.2 0 0 0 8.7 10.5M16 5.5h2.5v1.8a3.2 3.2 0 0 1-3.2 3.2" stroke={color} strokeWidth={1.5} strokeLinecap="round" />
      <Path d="M12 12.5V16M9 19.5h6" stroke={color} strokeWidth={1.6} strokeLinecap="round" />
    </Svg>
  );
}

export function MethodIcon({ name, size = 24 }: { name: string; size?: number }) {
  if (name === "creditCard") return <CreditCardIcon size={size} />;
  if (name === "virtualAccount") return <VirtualAccountIcon size={size} />;
  if (name === "paylater") return <PayLaterIcon size={size} />;
  if (name === "qr") return <QrIcon size={size} />;
  return <InstallmentIcon size={size} />;
}
