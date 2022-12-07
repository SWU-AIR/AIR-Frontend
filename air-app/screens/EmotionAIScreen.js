import React, { useEffect, useState } from "react";
import {
  Button,
  Pressable,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

export default function EmotionAIScreen({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [startCamera, setStartCamera] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied.");
    }
  };

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  let camera = Camera;

  const __takePicture = async () => {
    if (!camera) return;

    const photo = await camera.takePictureAsync();
    console.log("takePicturePhoto: ", photo);
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  const CameraPreview = ({ photo }) => {
    console.log("Preview", photo);
    return (
      <View
        style={{
          backgroundColor: "transparent",
          flex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <ImageBackground
          source={{ uri: photo && photo.uri }}
          style={{
            flex: 1,
          }}
        />
      </View>
    );
  };

  const __retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
    __startCamera();
  };

  const SavePhoto = (photo) => {
    navigation.navigate("ShowPicture", {
      photo: photo.uri,
    });
  };

  return (
    <>
      {previewVisible && capturedImage ? (
        <>
          <CameraPreview photo={capturedImage} />
          <View
            style={{
              position: "absolute",
              bottom: 0,
              flexDirection: "row",
              flex: 1,
              width: "100%",
              padding: 20,
              justifyContent: "space-between",
              backgroundColor: "#FAFDFC",
            }}
          >
            <View
              style={{
                alignSelf: "center",
                flex: 1,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Button
                title="retake"
                onPress={__retakePicture}
                style={{ backgroundColor: "white" }}
              />
              <TouchableOpacity
                onPress={__takePicture}
                style={{
                  width: 70,
                  height: 70,
                }}
              />
              <Button
                title="save"
                onPress={(photo) => {
                  SavePhoto(capturedImage);
                }}
              />
            </View>
          </View>
        </>
      ) : (
        <Camera
          style={{ flex: 1, width: "100%" }}
          type={type}
          ref={(r) => {
            camera = r;
          }}
        >
          <View
            style={{
              flex: 1,
              width: "100%",
              backgroundColor: "transparent",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                position: "absolute",
                bottom: 0,
                flexDirection: "row",
                flex: 1,
                width: "100%",
                padding: 20,
                justifyContent: "space-between",
                backgroundColor: "#FAFDFC",
              }}
            >
              <View
                style={{
                  alignSelf: "center",
                  flex: 1,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button title="gallery" />
                <TouchableOpacity
                  onPress={__takePicture}
                  style={{
                    width: 70,
                    height: 70,
                    bottom: 0,
                    borderRadius: 50,
                    backgroundColor: "#fff",
                    borderWidth: 2,
                    borderColor: "gray",
                  }}
                />
                <Button title="toggle" onPress={toggleCameraType}></Button>
              </View>
            </View>
          </View>
        </Camera>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  cameraButton: {
    width: 130,
    borderRadius: 4,
    backgroundColor: "#14274e",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  takePictureBtnContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    flex: 1,
    width: "100%",
    padding: 20,
    justifyContent: "space-between",
  },
  takePictureBtn: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
});
