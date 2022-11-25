import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import * as Progress from "react-native-progress"; // 프로그레스바

export default function QuizResultScreen({ navigation, route }) {
  return (
    <View style={styles.block}>
      <Text style={styles.titleText}>퀴즈 결과</Text>
      <Text>10개 중에 {route.params.score}개를 맞추셨습니다!</Text>
      <Progress.Bar
        style={styles.progressBar}
        progress={route.params.score / 10}
      />
      <Button
        title="오답 확인하기"
        onPress={() =>
          navigation.navigate("QuizReview", {
            wrongAnswerList: route.params.wrongAnswerList,
          })
        }
      />
      <Button title="퀴즈 종료하기" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: "24dp",
  },
  progressBar: {
    color: "blue",
  },
});
