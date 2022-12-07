import React from "react";
import { StyleSheet, View, Text, Button, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function CategoryScreen({ navigation }) {
  return (
    <View style={styles.block}>
      <View style={styles.buttonflex}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("EmotionList")}
        >
          <Text style={styles.text}>감정 카드</Text>
          <Text style={styles.subtext}>
            감정 카드를 통해 기쁨, 슬픔, 놀람 등 다양한 감정들을 학습해보세요.
          </Text>
        </Pressable>
      </View>
      <View style={styles.buttonflex}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Quiz")}
        >
          <Text style={styles.text}>퀴즈 맞추기</Text>
          <Text style={styles.subtext}>
            퀴즈를 통해 감정을 얼마나 이해할 수 있는지 확인해보세요.
          </Text>
        </Pressable>
      </View>
      <View style={styles.buttonflex}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Camera")}
        >
          <Text style={styles.text}>감정 판단 AI</Text>
          <Text style={styles.subtext}>
            직접 사진을 찍어보고 사진 속 사람의 감정을 파악해보세요.
          </Text>
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
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginTop: 20,
    paddingTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 20,
    width: "80%",
    height: "80%",
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
    fontSize: 23,
    lineHeight: 40,
    fontWeight: "bold",
    color: "black",
  },
  subtext: {
    fontSize: 18,
    lineHeight: 40,
    color: "black",
  },
});
