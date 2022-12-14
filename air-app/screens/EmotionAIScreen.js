import { AutoFocus } from "expo-camera";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function EmotionAIScreen({ navigation, route }) {
  return (
    <>
      <Text>uri: {route.params.photo}</Text>
      <Image source={{ uri: route.params.photo }} style={styles.image} />
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
