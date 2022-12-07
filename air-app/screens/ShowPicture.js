import { AutoFocus } from "expo-camera";
import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function ShowPicture({ navigation, route }) {
  return (
    <>
      <Text>uri: {route.params.photo}</Text>
      <Image source={{ uri: route.params.photo }} style={styles.image} />
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "80%",
    height: "100%",
    resizeMode: "contain",
  },
});
