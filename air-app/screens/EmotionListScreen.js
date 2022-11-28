import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function EmotionListScreen({navigation}){
    return (
        <View style={styles.block}>
           <View style={styles.buttonflex}>
            <Pressable style={styles.button} onPress={()=> navigation.navigate("Happy")}>
              <Text style={styles.text}>기쁨</Text>
            </Pressable>
          </View>
          <View style={styles.buttonflex}>
            <Pressable style={styles.button} onPress={()=> navigation.navigate("Sad")}>
              <Text style={styles.text}>슬픔</Text>
            </Pressable>
          </View>
          <View style={styles.buttonflex}>
            <Pressable style={styles.button} onPress={()=> navigation.navigate("Angry")}>
              <Text style={styles.text}>분노</Text>
            </Pressable>
          </View>
          <View style={styles.buttonflex}>
            <Pressable style={styles.button} onPress={()=> navigation.navigate("Surprised")}>
              <Text style={styles.text}>놀람</Text>
            </Pressable>
          </View>
          <View style={styles.buttonflex}>
            <Pressable style={styles.button} onPress={()=> navigation.navigate("Fear")}>
              <Text style={styles.text}>공포</Text>
            </Pressable>
          </View>
          <View style={styles.buttonflex}>
            <Pressable style={styles.button} onPress={()=> navigation.navigate("Disgust")}>
              <Text style={styles.text}>혐오</Text>
            </Pressable>
          </View>                    
        </View>
        
      );
    }
    
    const styles = StyleSheet.create({
      block: {
        flex: 1,
        backgroundColor:'#FAFDFC'
      },
      buttonflex:{
        flex:0.1,
      },
      button:{
        top:50,
        left:50,
        alignItems:'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 35,
        borderRadius: 20,
        width:'80%',
        height:'70%',
        elevation: 3,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      text:{
        fontSize: 18,
        color: 'black',  
      },
    });
    