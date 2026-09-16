import React from "react";
import { StyleSheet, useWindowDimensions } from "react-native";
import { Image } from "expo-image";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type Props = {
  image?: any;
};

const AnimatedImage = Animated.createAnimatedComponent(Image as any);

export default function SeatMapZoomableImage({ image }: Props) {
  const { width: screenW, height: screenH } = useWindowDimensions();
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const savedTranslateX = useSharedValue(0);
  const savedTranslateY = useSharedValue(0);

  const pinch = Gesture.Pinch()
    .onStart(() => {
      savedScale.value = scale.value;
    })
    .onUpdate((e) => {
      const next = savedScale.value * e.scale;
      scale.value = Math.min(Math.max(next, 1), 4);
    })
    .onEnd(() => {
      if (scale.value < 1.05) {
        scale.value = withTiming(1, { duration: 220 });
        translateX.value = withTiming(0, { duration: 220 });
        translateY.value = withTiming(0, { duration: 220 });
      }
    });

  const pan = Gesture.Pan()
    .onStart(() => {
      savedTranslateX.value = translateX.value;
      savedTranslateY.value = translateY.value;
    })
    .onUpdate((e) => {
      if (scale.value > 1) {
        translateX.value = savedTranslateX.value + e.translationX;
        translateY.value = savedTranslateY.value + e.translationY;
      }
    })
    .onEnd(() => {
      // clamp light - if zoomed out, reset
      if (scale.value <= 1) {
        translateX.value = withTiming(0, { duration: 200 });
        translateY.value = withTiming(0, { duration: 200 });
      }
    });

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => {
      if (scale.value > 1.4) {
        scale.value = withTiming(1, { duration: 260 });
        translateX.value = withTiming(0, { duration: 260 });
        translateY.value = withTiming(0, { duration: 260 });
      } else {
        scale.value = withTiming(2.2, { duration: 260 });
      }
    });

  const composed = Gesture.Simultaneous(pinch, pan, doubleTap);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }, { translateY: translateY.value }, { scale: scale.value }],
  }));

  // image size — portrait, contain, max height 70% of screen
  const imgHeight = Math.min(screenH * 0.68, screenW * 1.45);

  return (
    <GestureDetector gesture={composed}>
      <Animated.View style={[styles.container, { width: screenW, height: screenH * 0.78 }]}>
        <Animated.View style={[styles.imageWrap, animatedStyle]}>
          {image ? (
            <AnimatedImage
              source={image}
              style={{ width: screenW - 32, height: imgHeight, borderRadius: 2 }}
              contentFit="contain"
              transition={200}
            />
          ) : (
            <Animated.View style={[styles.placeholder, { width: screenW - 32, height: imgHeight }]} />
          )}
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  imageWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  placeholder: {
    backgroundColor: "#18181B",
    borderRadius: 4,
  },
});
