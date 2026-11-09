import { useEffect, useState } from "react";

const DEFAULT_DURATION = 10 * 60;

export default function usePaymentTimer(durationSeconds: number = DEFAULT_DURATION) {
  const [secondsLeft, setSecondsLeft] = useState(durationSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(secondsLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (secondsLeft % 60).toString().padStart(2, "0");

  return {
    secondsLeft,
    formatted: `${minutes}:${seconds}`,
    expired: secondsLeft <= 0,
  };
}
