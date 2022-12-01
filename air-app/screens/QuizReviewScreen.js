import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";

export default function QuizReviewScreen({ navigation, route }) {
  const [cardIndex, setCardIndex] = useState(0); // 문제(카드) 인덱스스
  const wrongAnswerList = route.params.wrongAnswerList; // 오답 리스트

  // 감정 카드
  const cardNav = (type) => {
    if (type === "next" && cardIndex < wrongAnswerList.length - 1) {
      setCardIndex(cardIndex + 1);
    } else if (type === "prev" && cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };

  return (
    <View style={styles.block}>
      <Text>
        {cardIndex + 1}/{wrongAnswerList.length}
      </Text>
      <Image
        style={styles.emotionCard}
        source={wrongAnswerList[cardIndex].image_source}
      />
      <Text>{wrongAnswerList[cardIndex].emotion}</Text>
      <Text>정답에 대한 설명 간단하게(이 정보도 데이터에 있어야 할 듯)</Text>
      <Button title="이전" onPress={(type) => cardNav("prev")} />
      <Button title="다음" onPress={(type) => cardNav("next")} />
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
  emotionCard: {
    width: 300,
    height: 250,
    resizeMode: "contain",
  },
});
