import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function EmotionListScreen({navigation}){
    return (
        <View style={styles.block}>
          <Button
            title="기쁨"
            onPress={()=> navigation.navigate("Happy")}
           />
          <Button
            title="슬픔"
            onPress={()=> navigation.navigate("Sad")}
           />
          <Button
            title="분노"
            onPress={()=> navigation.navigate("Angry")}
           />      
          <Button
            title="놀람"
            onPress={()=> navigation.navigate("Surprised")}
           />
          <Button
            title="공포"
            onPress={()=> navigation.navigate("Fear")}
           />
          <Button
            title="혐오"
            onPress={()=> navigation.navigate("Disgust")}
           />                          
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      block: {
        flex: 1,
      },
    });
    