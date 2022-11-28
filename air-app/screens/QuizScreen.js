import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function QuizScreen({ navigation }) {
  // 감정 카드 데이터
  const emotionCardData = [
    { id: 1, image_source: "../images/emotion_card", emotion: "놀람1" },
    { id: 2, image_source: "../images/emotion_card", emotion: "슬픔1" },
    { id: 3, image_source: "../images/emotion_card", emotion: "분노1" },
    { id: 4, image_source: "../images/emotion_card", emotion: "행복1" },
    { id: 5, image_source: "../images/emotion_card", emotion: "놀람2" },
    { id: 6, image_source: "../images/emotion_card", emotion: "슬픔2" },
    { id: 7, image_source: "../images/emotion_card", emotion: "분노2" },
    { id: 8, image_source: "../images/emotion_card", emotion: "행복2" },
    { id: 5, image_source: "../images/emotion_card", emotion: "놀람3" },
    { id: 6, image_source: "../images/emotion_card", emotion: "슬픔3" },
    { id: 7, image_source: "../images/emotion_card", emotion: "분노3" },
    { id: 8, image_source: "../images/emotion_card", emotion: "행복3" },
  ];

  return (
    <View style={styles.block}>
      <Button
        title="사진 보고 감정 맞추기"
        onPress={() =>
          navigation.navigate("QuizEmotion", {
            arrayLength: emotionCardData.length,
            emotionCard: emotionCardData,
          })
        }
      />
      <Button
        title="상황별 올바른 표정 찾기"
        onPress={() =>
          navigation.navigate("QuizSituation", {
            arrayLength: emotionCardData.length,
            emotionCard: emotionCardData,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
