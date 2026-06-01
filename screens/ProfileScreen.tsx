
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Alert,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

export default function ProfileScreen() {
  const [image, setImage] = useState<string | null>(null);

  
  async function pickImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert("Permissão necessária", "Precisamos de acesso à sua galeria para escolher uma foto.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, // Permite que o usuário corte a foto em formato quadrado
      aspect: [1, 1],
      quality: 0.7,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  
  async function takePhoto() {
    // Solicita permissão para usar a câmera
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert("Permissão necessária", "Precisamos de acesso à sua câmera para tirar a foto.");
      return;
    }

    
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, // Deixa cortar a foto antes de salvar
      aspect: [1, 1], // Força o corte quadrado (perfeito para perfil)
      quality: 0.7,   // Reduz um pouco o peso da imagem (bom para performance)
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); 
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Perfil</Text>

      {/* Renderiza a foto escolhida/tirada ou um placeholder cinza caso não exista */}
      <Image
        source={
          image 
            ? { uri: image } 
            : { uri: "https://via.placeholder.com/200/cccccc/ffffff?text=Sem+Foto" }
        }
        style={styles.image}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Tirar Foto com Câmera"
          onPress={takePhoto}
          color="#007AFF"
        />
        
        <View style={{ height: 10 }} /> {/* Espaçamento entre os botões */}
        
        <Button
          title="Escolher da Galeria"
          onPress={pickImage}
          color="#5856D6"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100, // Deixa o avatar perfeitamente redondo
    marginBottom: 30,
    borderWidth: 2,
    borderColor: "#ddd"
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
  }
});