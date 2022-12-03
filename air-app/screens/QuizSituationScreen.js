import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

export default function QuizSituationScreen({ navigation, route }) {
  const [probCount, setProbCount] = useState(1);
  const [answers, setAnswers] = useState([
    {
      id: 0,
      image_source: "",
      answer_source: "",
    },
    {
      id: 0,
      image_source: "",
      answer_source: "",
    },
    {
      id: 0,
      image_source: "",
      answer_source: "",
    },
    {
      id: 0,
      image_source: "",
      answer_source: "",
    },
  ]); // 문제 답 버튼

  const [score, setScore] = useState(0);
  const [wrongAnswerList, setWrongAnswerList] = useState([]);
  const [questionData, setQuestionData] = useState({
    id: "", // 감정 카드마다 고유 id 부여
    image_source: "", // 이미지 경로
    answer_source: "", // 정답 (추후 7가지 감정 0~6으로 라벨링해서 사용하면 될듯)
    desc: "",
  });

  useEffect((arrayLength) => {
    settingQuizData(route.params.arrayLength);
  }, []);

  useEffect(
    // probCount가 갱신될 때마다 퀴즈 데이터 갱신
    (arrayLength) => {
      settingQuizData(route.params.arrayLength);
    },
    [probCount]
  );

  const emotionCard = route.params.emotionCard;
  const [probList, setProbList] = useState([]); // 출제 문제 id 기록 (중복 출제 방지하기 위해)

  const settingQuizData = (arrayLength) => {
    // 데이터셋 배열에서 추출할 4개의 랜덤 숫자 생성
    let array = []; // 랜덤으로 숫자 4개 뽑기
    for (let i = 0; i < 4; i++) {
      let random = Math.floor(Math.random() * arrayLength); // arrayLength: 데이터셋에 들어있는 감정 카드의 총 개수
      if (array.includes(random) || probList.includes(random)) {
        i--;
      } else {
        array.push(random);
      }
    }

    // 4개의 데이터 중 1개를 출제 문제로 정함
    let random = Math.floor(Math.random() * 4);

    setProbList((probList) => [...probList, array[random]]);

    let questionDatas = emotionCard[array[random]];

    setQuestionData({
      id: questionDatas.id,
      image_source: questionDatas.image_source,
      answer_source: questionDatas.answer_source,
      desc: questionDatas.desc,
    });

    setAnswers([
      {
        id: emotionCard[array[0]].id,
        image_source: emotionCard[array[0]].image_source,
        answer_source: emotionCard[array[0]].answer_source,
        desc: emotionCard[array[0]].desc,
      },
      {
        id: emotionCard[array[1]].id,
        image_source: emotionCard[array[1]].image_source,
        answer_source: emotionCard[array[1]].answer_source,
        desc: emotionCard[array[1]].desc,
      },
      {
        id: emotionCard[array[2]].id,
        image_source: emotionCard[array[2]].image_source,
        answer_source: emotionCard[array[2]].answer_source,
        desc: emotionCard[array[2]].desc,
      },
      {
        id: emotionCard[array[3]].id,
        image_source: emotionCard[array[3]].image_source,
        answer_source: emotionCard[array[3]].answer_source,
        desc: emotionCard[array[3]].desc,
      },
    ]);
  };

  const clickAnswer = (clickedAnswer) => {
    if (clickedAnswer.id === questionData.id) {
      //정답
      setScore(score + 1);
    } else {
      //오답
      setWrongAnswerList((wrongAnswerList) => [
        ...wrongAnswerList,
        questionData,
      ]); // 오답일 경우 wrongAnswerList에 객체 추가 (추후 오답노트 사용 위해)
    }

    if (probCount === 10) {
      // 문제 10개를 다 풀었다면 결과 확인 화면으로 넘어가기
      navigation.replace("QuizResult", {
        score: score + 1,
        wrongAnswerList: wrongAnswerList,
      });
    }
    setProbCount(probCount + 1); // 문제 번호 증가
  };

  return (
    <View style={styles.block}>
      <View style={styles.textContainer}>
        <Text style={styles.countText}>{probCount}/10</Text>
      </View>
      <Image source={questionData.image_source} style={styles.questionImage} />
      <View style={styles.descContainer}>
        <Text style={styles.answerDesc}>{questionData.desc}</Text>
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.imageBox}>
          <TouchableOpacity
            onPress={(clickedAnswer) => clickAnswer(answers[0])}
          >
            <Image
              style={styles.imgButton}
              source={answers[0].answer_source} // answers[0]의 이미지 출력
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(clickedAnswer) => clickAnswer(answers[1])}
          >
            <Image style={styles.imgButton} source={answers[1].answer_source} />
          </TouchableOpacity>
        </View>
        <View style={styles.imageBox}>
          <TouchableOpacity
            onPress={(clickedAnswer) => clickAnswer(answers[2])}
          >
            <Image style={styles.imgButton} source={answers[2].answer_source} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(clickedAnswer) => clickAnswer(answers[3])}
          >
            <Image style={styles.imgButton} source={answers[3].answer_source} />
          </TouchableOpacity>
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
    padding: 20,
    paddingBottom: "15%",
    backgroundColor: "#FAFDFC",
  },
  countText: {
    textAlign: "center",
    fontSize: 20,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  questionImage: {
    flex: 6,
    marginBottom: 10,
    width: 300,
    height: 250,
    resizeMode: "contain",
    marginBottom: 10,
  },
  imageContainer: {
    flex: 7,
    width: "80%",
  },
  imageBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imgButton: {
    width: 140,
    height: 140,
    borderColor: "black",
    borderWidth: 1,
  },
  descContainer: {
    flex: 1.3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "80%",
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
});
