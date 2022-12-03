import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function QuizScreen({ navigation }) {
  // 감정 카드 데이터
  const emotionCardData = [
    {
      id: 1,
      image_source: require("../images/emotion-cards/happy_1.jpg"),
      emotion: "기쁨",
    },
    {
      id: 2,
      image_source: require("../images/emotion-cards/happy_2.jpg"),
      emotion: "기쁨",
    },
    {
      id: 3,
      image_source: require("../images/emotion-cards/happy_3.jpg"),
      emotion: "기쁨",
    },
    {
      id: 4,
      image_source: require("../images/emotion-cards/happy_4.jpg"),
      emotion: "기쁨",
    },
    {
      id: 5,
      image_source: require("../images/emotion-cards/sad_1.jpg"),
      emotion: "슬픔",
    },
    {
      id: 6,
      image_source: require("../images/emotion-cards/sad_2.jpg"),
      emotion: "슬픔",
    },
    {
      id: 7,
      image_source: require("../images/emotion-cards/sad_3.jpg"),
      emotion: "슬픔",
    },
    {
      id: 8,
      image_source: require("../images/emotion-cards/sad_4.jpg"),
      emotion: "슬픔",
    },
    {
      id: 9,
      image_source: require("../images/emotion-cards/sad_5.jpg"),
      emotion: "슬픔",
    },
    {
      id: 10,
      image_source: require("../images/emotion-cards/angry_1.jpg"),
      emotion: "분노",
    },
    {
      id: 11,
      image_source: require("../images/emotion-cards/angry_2.jpg"),
      emotion: "분노",
    },
    {
      id: 12,
      image_source: require("../images/emotion-cards/angry_3.jpg"),
      emotion: "분노",
    },
    {
      id: 13,
      image_source: require("../images/emotion-cards/angry_4.jpg"),
      emotion: "분노",
    },
    {
      id: 14,
      image_source: require("../images/emotion-cards/angry_5.png"),
      emotion: "분노",
    },
    {
      id: 15,
      image_source: require("../images/emotion-cards/surprise_1.jpg"),
      emotion: "놀람",
    },
    {
      id: 16,
      image_source: require("../images/emotion-cards/surprise_2.jpg"),
      emotion: "놀람",
    },
    {
      id: 17,
      image_source: require("../images/emotion-cards/surprise_3.jpg"),
      emotion: "놀람",
    },
    {
      id: 18,
      image_source: require("../images/emotion-cards/fear_1.jpg"),
      emotion: "공포",
    },
    {
      id: 19,
      image_source: require("../images/emotion-cards/disgust_1.jpg"),
      emotion: "혐오",
    },
    {
      id: 20,
      image_source: require("../images/emotion-cards/disgust_2.jpg"),
      emotion: "혐오",
    },
    {
      id: 21,
      image_source: require("../images/emotion-cards/disgust_3.jpg"),
      emotion: "혐오",
    },
  ];

  // 상황별 이미지 데이터
  const situationCardData = [
    {
      id: 1,
      image_source: require("../images/situational-cards/happy_1.png"),
      answer_source: require("../images/situational-cards/happy_1_ans.png"),
      desc: "즐겁게 생일파티를 하고 있습니다.",
    },
    {
      id: 2,
      image_source: require("../images/situational-cards/happy_2.png"),
      answer_source: require("../images/situational-cards/happy_2_ans.png"),
      desc: "기쁜 소식을 확인했습니다!",
    },
    {
      id: 3,
      image_source: require("../images/situational-cards/happy_3.png"),
      answer_source: require("../images/situational-cards/happy_3_ans.png"),
      desc: "가족들과 좋은 시간을 보내고 있어요.",
    },
    {
      id: 4,
      image_source: require("../images/situational-cards/angry_1.png"),
      answer_source: require("../images/situational-cards/angry_1_ans.jpg"),
      desc: "굉장히 화나는 일이 있나봅니다.",
    },
    {
      id: 5,
      image_source: require("../images/situational-cards/disgust_1.png"),
      answer_source: require("../images/situational-cards/disgust_1_ans.png"),
      desc: "음료에서 이상한 맛이 납니다.",
    },
    {
      id: 6,
      image_source: require("../images/situational-cards/fear_1.png"),
      answer_source: require("../images/situational-cards/fear_1_ans.png"),
      desc: "어린 소년은 주사가 무섭고 아픕니다.",
    },
    {
      id: 7,
      image_source: require("../images/situational-cards/angry_2.png"),
      answer_source: require("../images/situational-cards/angry_2_ans.png"),
      desc: "아내가 남편에게 화를 내고 있습니다.",
    },
    {
      id: 8,
      image_source: require("../images/situational-cards/sad_1.png"),
      answer_source: require("../images/situational-cards/sad_1_ans.png"),
      desc: "고민이 많아 힘이 듭니다.",
    },
    {
      id: 9,
      image_source: require("../images/situational-cards/surprise_1.png"),
      answer_source: require("../images/situational-cards/surprise_1_ans.png"),
      desc: "무언가 놀라운 일이 생겼습니다.",
    },
    {
      id: 10,
      image_source: require("../images/situational-cards/surprise_2.png"),
      answer_source: require("../images/situational-cards/surprise_2_ans.png"),
      desc: "남자는 매우 놀랐습니다.",
    },
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
          onPress={() =>
            navigation.navigate("QuizSituation", {
              arrayLength: situationCardData.length,
              emotionCard: situationCardData,
            })
          }
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
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    top: 50,
    marginTop: 20,
    paddingTop: 30,
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
    fontSize: 23,
    lineHeight: 40,
    fontWeight: "bold",
    color: "black",
  },
  subtext: {
    fontSize: 18,
    lineHeight: 40,
    color: "black",
  },
});
