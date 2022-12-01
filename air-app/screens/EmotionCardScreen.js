import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Button, Pressable } from "react-native";

export default function EmotionCardScreen({ navigation, route }) {
  // 감정에 따라 화면 타이틀 설정
  useEffect(() => {
    navigation.setOptions({ title: route.params.emotion });
  }, [navigation]);

  const questionGuide = [
    "해당 감정의 얼굴 모양을 따라해봐요.",
    "당신은 어떤 행동을 할 때 이 감정을 느끼나요?",
    "당신은 이 감정을 느낄 때 어떤 모습인가요?",
  ];

  const [guideIndex, setGuideIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [imageSource, setImageSource] = useState(0);

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

  console.log(JSON.stringify(route.params.emotionCard));

  return (
    <View style={styles.block}>
      <View style={styles.textContainer}>
        <Text>
          {cardIndex + 1}/{route.params.emotionCard.length}
        </Text>
      </View>
      <Image
        style={styles.emotionCard}
        source={route.params.emotionCard[cardIndex].image_source}
      />
      <Text>화가 난 - 설명??</Text>
      <View style={styles.questionGuideContainer}>
        <Button title="<" onPress={(type) => guideNav("prev")} />
        <Text>{questionGuide[guideIndex]}</Text>
        <Button title=">" onPress={(type) => guideNav("next")} />
      </View>
      <View style={styles.navigateBtn}>
        <Button title="이전" onPress={(type) => cardNav("prev")} />
        <Button title="다음" onPress={(type) => cardNav("next")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  questionGuideContainer: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  emotionCard: {
    width: 300,
    height: 250,
    resizeMode: "contain",
  },
  navigateBtn: {
    flexDirection: "row",
  },
});
