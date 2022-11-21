import React, { useState } from "react";

// 감정 카드 데이터
const emotionCardData = [
  { id: 1, image_source: "../images/emotion_card", answers: 1 },
  { id: 1, image_source: "../images/emotion_card", answers: 2 },
  { id: 1, image_source: "../images/emotion_card", answers: 3 },
  { id: 1, image_source: "../images/emotion_card", answers: 4 },
];

const countNum = 1; // 문제 번호
const [answers, setAnswers] = useState([0, 0, 0, 0]); // 문제 답 버튼
const [questionData, setQuestionData] = useState({
  id: "", // 감정 카드마다 고유 id 부여
  image_source: "", // 이미지 경로
  answers: "", // 정답 (추후 7가지 감정 0~6으로 라벨링해서 사용하면 될듯)
});

const settingQuizData = (arrayLength) => {
  // 데이터셋 배열에서 추출할 4개의 랜덤 숫자 생성
  let array = []; // 랜덤으로 숫자 4개 뽑기
  for (let i = 0; i < 4; i++) {
    let random = Math.floor(Math.random() * 4); // 4: 데이터셋에 들어있는 감정 카드의 총 개수
    if (array.includes(random)) {
      i--;
    } else {
      array.push(random);
    }
  }

  // 4개의 데이터 중 1개를 출제 문제로 정함
  let random = Math.floor(Math.random() * 4);
  let questionDatas = emotionCardData[array[random]];

  setQuestionData({
    id: questionDatas.id,
    image_source: questionDatas.image_source,
    answers: questionDatas.answers,
  });

  setAnswers([
    {
      id: vocaData.data[array[0]].id,
      korean: vocaData.data[array[0]].korean,
    },
    {
      id: vocaData.data[array[1]].id,
      korean: vocaData.data[array[1]].korean,
    },
    {
      id: vocaData.data[array[2]].id,
      korean: vocaData.data[array[2]].korean,
    },
    {
      id: vocaData.data[array[3]].id,
      korean: vocaData.data[array[3]].korean,
    },
  ]);
};
