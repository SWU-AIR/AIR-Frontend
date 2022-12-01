import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function EmotionListScreen({ navigation }) {
  // 감정 카드 데이터
  const emotionCardData = [
    {
      id: 1,
      image_source: require("../images/emotion_card.png"),
      emotion: "놀람",
    },
    {
      id: 2,
      image_source: require("../images/emotion_card.png"),
      emotion: "슬픔",
    },
    {
      id: 3,
      image_source: require("../images/emotion_card.png"),
      emotion: "분노",
    },
    { id: 4, image_source: require("../images/happy_1.png"), emotion: "행복" },
    {
      id: 5,
      image_source: require("../images/emotion_card.png"),
      emotion: "놀람",
    },
    {
      id: 6,
      image_source: require("../images/emotion_card.png"),
      emotion: "슬픔",
    },
    {
      id: 7,
      image_source: require("../images/emotion_card.png"),
      emotion: "분노",
    },
    { id: 8, image_source: require("../images/happy_2.png"), emotion: "행복" },
    {
      id: 9,
      image_source: require("../images/emotion_card.png"),
      emotion: "놀람",
    },
    {
      id: 10,
      image_source: require("../images/emotion_card.png"),
      emotion: "슬픔",
    },
    {
      id: 11,
      image_source: require("../images/emotion_card.png"),
      emotion: "분노",
    },
    {
      id: 12,
      image_source: require("../images/emotion_card.png"),
      emotion: "행복",
    },
    {
      id: 13,
      image_source: require("../images/emotion_card.png"),
      emotion: "놀람",
    },
    {
      id: 14,
      image_source: require("../images/emotion_card.png"),
      emotion: "슬픔",
    },
  ];

  const cardHappy = emotionCardData.filter((card) => card.emotion === "행복");
  const cardSad = emotionCardData.filter((card) => card.emotion === "슬픔");
  const cardAngry = emotionCardData.filter((card) => card.emotion === "분노");
  const cardSurprise = emotionCardData.filter(
    (card) => card.emotion === "놀람"
  );
  const cardFear = emotionCardData.filter((card) => card.emotion === "공포");
  const cardDisgusting = emotionCardData.filter(
    (card) => card.emotion === "혐오"
  );

  return (
    <View style={styles.block}>
      <View style={styles.buttonflex}>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("EmotionCard", {
              emotionCard: cardHappy,
              emotion: "기쁨",
            })
          }
        >
          <Text style={styles.text}>기쁨</Text>
        </Pressable>
      </View>
      <View style={styles.buttonflex}>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("EmotionCard", {
              emotionCard: cardSad,
              emotion: "슬픔",
            })
          }
        >
          <Text style={styles.text}>슬픔</Text>
        </Pressable>
      </View>
      <View style={styles.buttonflex}>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("EmotionCard", {
              emotionCard: cardAngry,
              emotion: "분노",
            })
          }
        >
          <Text style={styles.text}>분노</Text>
        </Pressable>
      </View>
      <View style={styles.buttonflex}>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("EmotionCard", {
              emotionCard: cardSurprise,
              emotion: "놀람",
            })
          }
        >
          <Text style={styles.text}>놀람</Text>
        </Pressable>
      </View>
      <View style={styles.buttonflex}>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("EmotionCard", {
              emotionCard: cardFear,
              emotion: "공포",
            })
          }
        >
          <Text style={styles.text}>공포</Text>
        </Pressable>
      </View>
      <View style={styles.buttonflex}>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("EmotionCard", {
              emotionCard: cardDisgusting,
              emotion: "혐오",
            })
          }
        >
          <Text style={styles.text}>혐오</Text>
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
    flex: 0.1,
  },
  button: {
    top: 50,
    left: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 35,
    borderRadius: 20,
    width: "80%",
    height: "70%",
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
    fontSize: 18,
    color: "black",
  },
});
