import { useEffect } from "react";
import { Easing, runOnJS, useSharedValue, withDelay, withSequence, withTiming } from "react-native-reanimated";

const EASE_OUT = Easing.out(Easing.cubic);
const EASE_IN = Easing.in(Easing.cubic);

export function useLoketSplashAnimation(onFinish: () => void) {
  const bgOpacity = useSharedValue(0);
  const logoOpacity = useSharedValue(0);
  const logoScale = useSharedValue(0.82);
  const wordmarkOpacity = useSharedValue(0);
  const wordmarkTranslateY = useSharedValue(14);
  const exitOpacity = useSharedValue(1);
  const exitScale = useSharedValue(1);

  useEffect(() => {
    // Background fade in 0-280ms
    bgOpacity.value = withTiming(1, { duration: 280, easing: Easing.linear });

    // Logo reveal: fade + smooth scale, no bounce
    logoOpacity.value = withDelay(280, withTiming(1, { duration: 420, easing: EASE_OUT }));
    logoScale.value = withDelay(
      280,
      withSequence(
        withTiming(1, { duration: 560, easing: EASE_OUT }),
        withTiming(1.015, { duration: 200, easing: Easing.out(Easing.quad) }),
        withTiming(1, { duration: 220, easing: Easing.inOut(Easing.quad) })
      )
    );

    // Wordmark appears after logo settles
    wordmarkOpacity.value = withDelay(900, withTiming(1, { duration: 380, easing: EASE_OUT }));
    wordmarkTranslateY.value = withDelay(900, withTiming(0, { duration: 380, easing: EASE_OUT }));

    // Hold branding moment ~500ms, then fade-out transition
    exitOpacity.value = withDelay(
      1900,
      withTiming(0, { duration: 360, easing: EASE_IN }, (finished) => {
        if (finished) runOnJS(onFinish)();
      })
    );
    exitScale.value = withDelay(1900, withTiming(0.96, { duration: 360, easing: EASE_IN }));
  }, []);

  return {
    bgOpacity,
    logoOpacity,
    logoScale,
    wordmarkOpacity,
    wordmarkTranslateY,
    exitOpacity,
    exitScale,
  };
}
