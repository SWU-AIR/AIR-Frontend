import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
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
      <View style={styles.buttonflex}>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("QuizEmotion", {
              arrayLength: emotionCardData.length,
              emotionCard: emotionCardData,
            })
          }
        >
          <Text style={styles.text}>사진 보고 감정 맞추기</Text>
          <Text style={styles.subtext}>
            주어진 사진을 보고 주인공의 감정을 맞춰보세요.
          </Text>
        </Pressable>
      </View>
      <View style={styles.buttonflex}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("QuizSituation")}
        >
          <Text style={styles.text}>상황별 올바른 표정 찾기</Text>
          <Text style={styles.subtext}>
            주어진 상황과 사진을 보고 적절한 표정을 골라보세요.
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: "#FAFDFC",
  },
  buttonflex: {
    flex: 0.3,
  },
  button: {
    top: 50,
    left: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 20,
    width: "80%",
    height: "80%",
    elevation: 3,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    fontSize: 20,
    lineHeight: 40,
    fontWeight: "bold",
    color: "black",
  },
  subtext: {
    fontSize: 16,
    lineHeight: 40,
    color: "black",
  },
});
