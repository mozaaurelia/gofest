import { useEffect } from "react";
import { Easing, runOnJS, useSharedValue, withDelay, withSequence, withTiming } from "react-native-reanimated";

const EASE_OUT = Easing.out(Easing.cubic);
const EASE_IN = Easing.in(Easing.cubic);

export function useGoFestSplashAnimation(onFinish: () => void) {
  const bgOpacity = useSharedValue(0);
  const logoOpacity = useSharedValue(0);
  const logoScale = useSharedValue(0.78);
  const wordmarkOpacity = useSharedValue(0);
  const wordmarkTranslateY = useSharedValue(12);
  const exitOpacity = useSharedValue(1);
  const exitScale = useSharedValue(1);

  useEffect(() => {
    bgOpacity.value = withTiming(1, { duration: 260, easing: Easing.linear });

    // logo reveal bertahap smooth scale/fade
    logoOpacity.value = withDelay(260, withTiming(1, { duration: 420, easing: EASE_OUT }));
    logoScale.value = withDelay(
      260,
      withSequence(
        withTiming(1, { duration: 560, easing: EASE_OUT }),
        withTiming(1.02, { duration: 180, easing: Easing.out(Easing.quad) }),
        withTiming(1, { duration: 200, easing: Easing.inOut(Easing.quad) })
      )
    );

    // wordmark muncul setelah logo settle
    wordmarkOpacity.value = withDelay(880, withTiming(1, { duration: 360, easing: EASE_OUT }));
    wordmarkTranslateY.value = withDelay(880, withTiming(0, { duration: 360, easing: EASE_OUT }));

    // hold + fade-out transition ke halaman berikutnya
    exitOpacity.value = withDelay(
      1900,
      withTiming(0, { duration: 380, easing: EASE_IN }, (finished) => {
        if (finished) runOnJS(onFinish)();
      })
    );
    exitScale.value = withDelay(1900, withTiming(0.97, { duration: 380, easing: EASE_IN }));
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
