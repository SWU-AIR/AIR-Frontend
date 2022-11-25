import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function QuizReviewScreen({ navigation, route }) {
  const [wrongProbCount, setWrongProbCount] = useState(1); // 오답 문제 번호
  const wrongAnswerList = route.params.wrongAnswerList; // 오답 리스트

  return (
    <View style={styles.block}>
      <Text>
        {wrongProbCount}/{route.params.wrongAnswerList.length}
      </Text>
      <Text>화가 난</Text>
      <Text>정답에 대한 설명 간단하게(이 정보도 데이터에 있어야 할 듯)</Text>
      <Button title="이전" />
      <Button title="다음" />
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
});
