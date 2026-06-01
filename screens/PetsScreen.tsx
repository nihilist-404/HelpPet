import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PetsScreen({ navigation }: any) {
  const [pets, setPets] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener(
      "focus",
      loadPets
    );

    return unsubscribe;
  }, []);

  async function loadPets() {
    const data = await AsyncStorage.getItem("pets");

    if (data) {
      setPets(JSON.parse(data));
    } else {
      setPets([]);
    }
  }

  function deletePet(id: string) {
    Alert.alert(
      "Excluir Pet",
      "Tem certeza que deseja excluir este pet?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            const updatedPets = pets.filter(
              (pet) => pet.id !== id
            );

            setPets(updatedPets);

            await AsyncStorage.setItem(
              "pets",
              JSON.stringify(updatedPets)
            );
          },
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate("RegisterPet")
        }
      >
        <Text style={styles.addButtonText}>
          + Cadastrar Pet
        </Text>
      </TouchableOpacity>

      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {item.image ? (
              <Image
                source={{ uri: item.image }}
                style={styles.image}
              />
            ) : null}

            <View style={styles.info}>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.text}>
                🐾 Raça: {item.breed}
              </Text>

              <Text style={styles.text}>
                🎂 Idade: {item.age}
              </Text>

              <TouchableOpacity
                style={styles.detailButton}
                onPress={() =>
                  navigation.navigate(
                    "Detail",
                    { pet: item }
                  )
                }
              >
                <Text style={styles.buttonText}>
                  Ver Detalhes
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() =>
                  deletePet(item.id)
                }
              >
                <Text style={styles.buttonText}>
                  Excluir Pet
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 15,
  },

  addButton: {
    backgroundColor: "#2E8B57",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },

  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 220,
  },

  info: {
    padding: 15,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },

  detailButton: {
    backgroundColor: "#2E8B57",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  deleteButton: {
    backgroundColor: "#dc3545",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});
