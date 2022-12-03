import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Button, Pressable } from "react-native";

export default function QuizEmotionScreen({ navigation, route }) {
  const [probCount, setProbCount] = useState(1);
  const [answers, setAnswers] = useState([
    {
      id: 0,
      emotion: "",
    },
    {
      id: 0,
      emotion: "",
    },
    {
      id: 0,
      emotion: "",
    },
    {
      id: 0,
      emotion: "",
    },
  ]); // 문제 답 버튼
  const [score, setScore] = useState(0);
  const [wrongAnswerList, setWrongAnswerList] = useState([]);
  const [questionData, setQuestionData] = useState({
    id: "", // 감정 카드마다 고유 id 부여
    image_source: "", // 이미지 경로
    emotion: "", // 정답
  });

  useEffect(() => {
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
      emotion: questionDatas.emotion,
    });

    // 4개의 보기 생성 (정답 포함)
    const emotionList = ["기쁨", "슬픔", "분노", "놀람", "공포", "혐오"];
    var answerEmotionIndex;

    for (let i = 0; i < emotionList.length; i++) {
      if (questionDatas.emotion === emotionList[i]) {
        answerEmotionIndex = i;
        break;
      }
    }

    var answerListIndex = [answerEmotionIndex];

    // 랜덤으로 숫자 3개 뽑기
    for (let i = 0; i < 3; i++) {
      let random = Math.floor(Math.random() * emotionList.length);
      if (answerListIndex.includes(random)) {
        i--;
      } else {
        answerListIndex.push(random);
      }
    }

    answerListIndex.sort(() => Math.random() - 0.5);

    setAnswers([
      {
        id: emotionCard[array[0]].id,
        image_source: emotionCard[array[0]].image_source,
        emotion: emotionList[answerListIndex[0]],
      },
      {
        id: emotionCard[array[1]].id,
        image_source: emotionCard[array[1]].image_source,
        emotion: emotionList[answerListIndex[1]],
      },
      {
        id: emotionCard[array[2]].id,
        image_source: emotionCard[array[2]].image_source,
        emotion: emotionList[answerListIndex[2]],
      },
      {
        id: emotionCard[array[3]].id,
        image_source: emotionCard[array[3]].image_source,
        emotion: emotionList[answerListIndex[3]],
      },
    ]);
  };

  const clickAnswer = (clickedAnswer) => {
    if (clickedAnswer.emotion === questionData.emotion) {
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
      <Image style={styles.emotionCard} source={questionData.image_source} />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonflex}>
          <Pressable
            style={styles.button}
            onPress={(clickedAnswer) => clickAnswer(answers[0])}
          >
            <Text style={styles.text}>{answers[0].emotion}</Text>
          </Pressable>
        </View>
        <View style={styles.buttonflex}>
          <Pressable
            style={styles.button}
            onPress={(clickedAnswer) => clickAnswer(answers[1])}
          >
            <Text style={styles.text}>{answers[1].emotion}</Text>
          </Pressable>
        </View>
        <View style={styles.buttonflex}>
          <Pressable
            style={styles.button}
            onPress={(clickedAnswer) => clickAnswer(answers[2])}
          >
            <Text style={styles.text}>{answers[2].emotion}</Text>
          </Pressable>
        </View>
        <View style={styles.buttonflex}>
          <Pressable
            style={styles.button}
            onPress={(clickedAnswer) => clickAnswer(answers[3])}
          >
            <Text style={styles.text}>{answers[3].emotion}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAFDFC",
    paddingBottom: "25%",
    padding: 20,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  countText: {
    textAlign: "center",
    fontSize: 20,
  },
  emotionCard: {
    flex: 6,
    width: 300,
    height: 250,
    marginBottom: 10,
    resizeMode: "contain",
  },
  buttonContainer: {
    flex: 4.5,
    width: "80%",
  },
  buttonflex: {
    flex: 0.3,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
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
  text: {
    fontSize: 18,
    color: "white",
  },
});
