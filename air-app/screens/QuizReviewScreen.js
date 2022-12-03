import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";

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
      <View style={styles.viewContainer}>
        <Text style={styles.countText}>
          {cardIndex + 1}/{wrongAnswerList.length}
        </Text>
        <Image
          style={styles.emotionCard}
          source={wrongAnswerList[cardIndex].image_source}
        />
        <Text style={styles.emotionText}>
          {wrongAnswerList[cardIndex].emotion}
        </Text>
        <View style={styles.descContainer}>
          <Text style={styles.answerDesc}>정답에 대한 설명</Text>
        </View>
        <View style={styles.btnContainer}>
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
  },
  viewContainer: {
    flex: 1,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 90,
  },
  countText: {
    flex: 0.3,
    textAlign: "center",
    fontSize: 20,
  },
  emotionCard: {
    flex: 4,
    width: 300,
    height: 250,
    resizeMode: "contain",
  },
  emotionText: {
    flex: 0.5,
    textAlign: "center",
    fontSize: 20,
  },
  descContainer: {
    flex: 2,
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
  answerDesc: {
    fontSize: 18,
  },
  btnContainer: {
    flex: 0.55,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "47%",
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
  align: {
    width: "3%",
  },
  btnTitle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});
