import React from "react";
import { Modal, StyleSheet, View, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SeatMapFullscreenHeader from "./seat-map-fullscreen-header";
import SeatMapZoomableImage from "./seat-map-zoomable-image";
import SeatMapViewerFooter from "./seat-map-viewer-footer";

type Props = {
  visible: boolean;
  onClose: () => void;
  image?: any;
};

export default function SeatMapFullscreenViewer({ visible, onClose, image }: Props) {
  return (
    <Modal
      visible={visible}
      transparent={false}
      animationType="fade"
      presentationStyle="fullScreen"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <GestureHandlerRootView style={styles.root}>
        <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
          <StatusBar barStyle="light-content" backgroundColor="#000000" />
          <SeatMapFullscreenHeader onBack={onClose} />

          <View style={styles.body}>
            <SeatMapZoomableImage image={image} />
            <SeatMapViewerFooter image={image} current={1} total={1} />
          </View>
        </SafeAreaView>
      </GestureHandlerRootView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#000000",
  },
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  body: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
});
