import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuizScreen from "./screens/QuizScreen";
import QuizEmotionScreen from "./screens/QuizEmotionScreen";
import QuizSituationScreen from "./screens/QuizSituationScreen";
import CategoryScreen from "./screens/CategoryScreen";
import QuizReviewScreen from "./screens/QuizReviewScreen";
import QuizResultScreen from "./screens/QuizResultScreen";
import EmotionListScreen from "./screens/EmotionListScreen";
import EmotionCardScreen from "./screens/EmotionCardScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Category">
        <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={{
            title: "카테고리",
            headerStyle: {
              backgroundColor: "#FAFDFC",
            },
          }}
        />
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          options={{
            title: "퀴즈",
            headerStyle: {
              backgroundColor: "#FAFDFC",
            },
          }}
        />
        <Stack.Screen
          name="QuizEmotion"
          component={QuizEmotionScreen}
          options={{
            title: "감정 맞추기",
            headerStyle: {
              backgroundColor: "#FAFDFC",
            },
          }}
        />
        <Stack.Screen
          name="QuizSituation"
          component={QuizSituationScreen}
          options={{
            title: "올바른 표정 찾기",
            headerStyle: {
              backgroundColor: "#FAFDFC",
            },
          }}
        />
        <Stack.Screen
          name="QuizResult"
          component={QuizResultScreen}
          options={{
            title: "퀴즈 결과",
            headerStyle: {
              backgroundColor: "#FAFDFC",
            },
          }}
        />
        <Stack.Screen
          name="QuizReview"
          component={QuizReviewScreen}
          options={{
            title: "오답 확인하기",
            headerStyle: {
              backgroundColor: "#FAFDFC",
            },
          }}
        />
        <Stack.Screen
          name="EmotionList"
          component={EmotionListScreen}
          options={{
            title: "감정 카드",
            headerStyle: {
              backgroundColor: "#FAFDFC",
            },
          }}
        />
        <Stack.Screen
          name="EmotionCard"
          component={EmotionCardScreen}
          options={{
            headerStyle: {
              backgroundColor: "#FAFDFC",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
