import React from "react";
import { StyleSheet, View, Text, Button, Pressable } from "react-native";
import * as Progress from "react-native-progress"; // 프로그레스바

export default function QuizResultScreen({ navigation, route }) {
  return (
    <View style={styles.block}>
      <View style={styles.resultContainer}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>퀴즈 결과</Text>
        </View>
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>
            10개 중에 {route.params.score}개를 맞추셨습니다!
          </Text>
        </View>
        <View style={styles.pgBarContainer}>
          <Progress.Bar
            color="rgba(145, 180, 194, 1)"
            unfilledColor="rgba(217, 217, 217, 1)"
            borderWidth="0"
            height={8}
            width={250}
            progress={route.params.score / 10}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonflex}>
          <Pressable
            style={styles.button}
            onPress={() =>
              navigation.navigate("QuizReview", {
                wrongAnswerList: route.params.wrongAnswerList,
              })
            }
          >
            <Text style={styles.text}>오답 확인하기</Text>
          </Pressable>
        </View>
        <View style={styles.buttonflex}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.popToTop()}
          >
            <Text style={styles.text}>퀴즈 종료하기</Text>
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
  titleTextContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: "28dp",
    textAlign: "center",
    fontWeight: "bold",
  },
  subTextContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  subText: {
    fontSize: "18dp",
  },
  resultContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
    paddingHorizontal: 35,
    borderRadius: 20,
    width: "80%",
    height: "30%",
    elevation: 3,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: "10%",
  },
  pgBarContainer: {
    flex: 2,
    paddingTop: "5%",
  },
  progressBar: {
    color: "rgba(145, 180, 194, 1)",
  },
  buttonContainer: {
    width: "80%",
    height: "25%",
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
