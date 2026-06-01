import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

export default function ProfileScreen() {
  const [image, setImage] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const photo =
      await AsyncStorage.getItem("profilePhoto");

    if (photo) {
      setImage(photo);
    }
  }

  async function savePhoto(uri: string) {
    setImage(uri);

    await AsyncStorage.setItem(
      "profilePhoto",
      uri
    );
  }

  async function pickImage() {
    const result =
      await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      savePhoto(result.assets[0].uri);
    }
  }

  async function takePhoto() {
    const permission =
      await ImagePicker.requestCameraPermissionsAsync();

    if (!permission.granted) return;

    const result =
      await ImagePicker.launchCameraAsync();

    if (!result.canceled) {
      savePhoto(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Meu Perfil
      </Text>

      {image ? (
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
      ) : null}

      <Button
        title="Escolher Foto"
        onPress={pickImage}
      />

      <Button
        title="Tirar Foto"
        onPress={takePhoto}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  image: {
    width: 220,
    height: 220,
    borderRadius: 110,
    marginBottom: 20,
  },
});
