import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

export default function EmotionCardScreen({ navigation, route }) {
  // 감정에 따라 화면 타이틀 설정
  useEffect(() => {
    navigation.setOptions({ title: route.params.emotion });
  }, [navigation]);

  const questionGuide = [
    "해당 감정의 얼굴 모양을 따라해봐요.",
    "당신은 어떤 행동을 할 때 \n이 감정을 느끼나요?",
    "당신은 이 감정을 느낄 때 어떤 모습인가요?",
  ];

  const [guideIndex, setGuideIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);

  // 질문 가이드 보여주는 함수
  const guideNav = (type) => {
    if (type === "next") {
      if (guideIndex === 2) {
        setGuideIndex(0);
        return;
      }
      setGuideIndex(guideIndex + 1);
    }

    if (type === "prev") {
      if (guideIndex === 0) {
        setGuideIndex(2);
        return;
      }
      setGuideIndex(guideIndex - 1);
    }
  };

  // 감정 카드
  const cardNav = (type) => {
    if (type === "next" && cardIndex < route.params.emotionCard.length - 1) {
      setCardIndex(cardIndex + 1);
    } else if (type === "prev" && cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };

  return (
    <View style={styles.block}>
      <View style={styles.viewContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.countText}>
            {cardIndex + 1}/{route.params.emotionCard.length}
          </Text>
        </View>
        <Image
          style={styles.emotionCard}
          source={route.params.emotionCard[cardIndex].image_source}
        />
        <View style={styles.questionGuideContainer}>
          <Pressable onPress={(type) => guideNav("prev")}>
            <Image
              style={styles.arrow}
              source={require("../images/icons/angle-left.png")}
            />
          </Pressable>
          <Text style={styles.guideText}>{questionGuide[guideIndex]}</Text>
          <Pressable onPress={(type) => guideNav("next")}>
            <Image
              style={styles.arrow}
              source={require("../images/icons/angle-right.png")}
            />
          </Pressable>
        </View>
        <View style={styles.navigateBtn}>
          <Pressable style={styles.button} onPress={(type) => cardNav("prev")}>
            <Text style={styles.btnTitle}>이전</Text>
          </Pressable>
          <View style={styles.align} />
          <Pressable style={styles.button} onPress={(type) => cardNav("next")}>
            <Text style={styles.btnTitle}>다음</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAFDFC",
    paddingBottom: "15%",
  },
  viewContainer: {
    flex: 1,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 50,
  },
  textContainer: {
    flex: 0.5,
  },
  countText: {
    textAlign: "center",
    fontSize: 20,
  },
  emotionCard: {
    flex: 6,
    width: 300,
    height: 250,
    resizeMode: "contain",
  },
  questionGuideContainer: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "95%",
    marginBottom: 30,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  arrow: {
    width: 20,
    height: 20,
    opacity: 0.5,
  },
  guideText: {
    fontSize: 20,
    width: "80%",
    textAlign: "center",
  },
  navigateBtn: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  align: {
    width: "3%",
  },
  button: {
    width: "46%",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#91B4C2",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  btnTitle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});
