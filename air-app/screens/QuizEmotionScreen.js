import React from "react";
import { StyleSheet, View, Text } from "react-native";
import QuizEmotion from "../components/QuizEmotion";

export default function QuizEmotionScreen({ navigation }) {
  return (
    <View style={styles.block}>
      <QuizEmotion />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
