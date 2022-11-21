import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";

export default function QuizEmotion() {
  const countNum = 1; // 문제 번호

  // 감정 카드 데이터
  const emotionCardData = [
    { id: 1, image_source: "../images/emotion_card", emotion: "놀람" },
    { id: 2, image_source: "../images/emotion_card", emotion: "슬픔" },
    { id: 3, image_source: "../images/emotion_card", emotion: "분노" },
    { id: 4, image_source: "../images/emotion_card", emotion: "행복" },
    { id: 5, image_source: "../images/emotion_card", emotion: "놀람" },
    { id: 6, image_source: "../images/emotion_card", emotion: "슬픔" },
    { id: 7, image_source: "../images/emotion_card", emotion: "분노" },
    { id: 8, image_source: "../images/emotion_card", emotion: "행복" },
  ];

  const [answers, setAnswers] = useState([0, 1, 2, 3]); // 문제 답 버튼
  const [questionData, setQuestionData] = useState({
    id: "", // 감정 카드마다 고유 id 부여
    image_source: "", // 이미지 경로
    emotion: "", // 정답 (추후 7가지 감정 0~6으로 라벨링해서 사용하면 될듯)
  });

  const settingQuizData = () => {
    // 데이터셋 배열에서 추출할 4개의 랜덤 숫자 생성
    let array = []; // 랜덤으로 숫자 4개 뽑기
    for (let i = 0; i < 4; i++) {
      let random = Math.floor(Math.random() * 8); // 8: 데이터셋에 들어있는 감정 카드의 총 개수
      if (array.includes(random)) {
        i--;
      } else {
        array.push(random);
        console.log(array);
      }
    }

    // 4개의 데이터 중 1개를 출제 문제로 정함
    let random = Math.floor(Math.random() * 4);
    let questionDatas = emotionCardData[array[random]];

    setQuestionData({
      id: questionDatas.id,
      image_source: questionDatas.image_source,
      emotion: questionDatas.emotion,
    });

    setAnswers([
      {
        id: emotionCardData[array[0]].id,
        emotion: emotionCardData[array[0]].emotion,
      },
      {
        id: emotionCardData[array[1]].id,
        emotion: emotionCardData[array[1]].emotion,
      },
      {
        id: emotionCardData[array[2]].id,
        emotion: emotionCardData[array[2]].emotion,
      },
      {
        id: emotionCardData[array[3]].id,
        emotion: emotionCardData[array[3]].emotion,
      },
    ]);
  };

  return (
    <View>
      <Text style={styles.countText}>{countNum}/10</Text>
      <Image source={require("./../images/emotion_card.png")} />
      <Button title={emotionCardData[answers[0]].emotion} />
      <Button title={emotionCardData[answers[1]].emotion} />
      <Button title={emotionCardData[answers[2]].emotion} />
      <Button title={emotionCardData[answers[3]].emotion} />
    </View>
  );
}

const styles = StyleSheet.create({
  countText: {
    textAlign: "center",
  },
});
