import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function CategoryScreen({navigation}) {
  return (
    <View style={styles.block}>
      <Button
        title="감정카드"
        onPress={()=> navigation.navigate("EmotionCard")}
       />
      <Button
        title="퀴즈 맞추기"
        onPress={()=> navigation.navigate("Quiz")}
       />
      <Button
        title="감정 판단 AI"
        onPress={()=> navigation.navigate("EmotionAI")}
       />               
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
