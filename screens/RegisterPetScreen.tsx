import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

export default function RegisterPetScreen({
  navigation,
}: any) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  async function pickImage() {
    const result =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes:
          ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  async function takePhoto() {
    const permission =
      await ImagePicker.requestCameraPermissionsAsync();

    if (!permission.granted) {
      Alert.alert(
        "Permissão necessária",
        "Autorize o acesso à câmera."
      );
      return;
    }

    const result =
      await ImagePicker.launchCameraAsync({
        quality: 1,
      });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  async function savePet() {
    if (
      !name ||
      !breed ||
      !age ||
      !description
    ) {
      Alert.alert(
        "Atenção",
        "Preencha todos os campos."
      );
      return;
    }

    const pet = {
      id: Date.now().toString(),
      name,
      breed,
      age,
      description,
      image,
    };

    const oldPets =
      await AsyncStorage.getItem("pets");

    const pets = oldPets
      ? JSON.parse(oldPets)
      : [];

    pets.push(pet);

    await AsyncStorage.setItem(
      "pets",
      JSON.stringify(pets)
    );

    Alert.alert(
      "Sucesso",
      "Pet cadastrado com sucesso!"
    );

    navigation.goBack();
  }

  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholder="Nome do Pet"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Raça"
        value={breed}
        onChangeText={setBreed}
        style={styles.input}
      />

      <TextInput
        placeholder="Idade"
        value={age}
        onChangeText={setAge}
        style={styles.input}
      />

      <TextInput
        placeholder="Descrição do Pet"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={5}
        style={styles.descriptionInput}
      />

      {image ? (
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
      ) : null}

      <View style={styles.buttonSpacing}>
        <Button
          title="Escolher Foto"
          onPress={pickImage}
        />
      </View>

      <View style={styles.buttonSpacing}>
        <Button
          title="Tirar Foto"
          onPress={takePhoto}
        />
      </View>

      <View style={styles.buttonSpacing}>
        <Button
          title="Cadastrar Pet"
          onPress={savePet}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },

  descriptionInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    height: 120,
    textAlignVertical: "top",
  },

  image: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    marginBottom: 15,
  },

  buttonSpacing: {
    marginBottom: 10,
  },
});