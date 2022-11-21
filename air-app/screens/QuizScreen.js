import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function QuizScreen({ navigation }) {
  return (
    <View style={styles.block}>
      <Button
        title="사진 보고 감정 맞추기"
        onPress={() => navigation.navigate("QuizEmotion")}
      />
      <Button
        title="상황별 올바른 표정 찾기"
        onPress={() => navigation.navigate("QuizSituation")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
