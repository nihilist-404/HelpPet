
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function DetailScreen({ route }: any) {
  const { pet } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: pet.image }}
        style={styles.image}
      />

      <Text style={styles.name}>
        {pet.name}
      </Text>

      <Text style={styles.info}>
        Raça: {pet.breed}
      </Text>

      <Text style={styles.info}>
        Idade: {pet.age}
      </Text>

      <Text style={styles.description}>
        Este pet está procurando uma família
        amorosa para adoção. Ele é amigável,
        carinhoso e adora brincar.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    width: "100%",
    height: 300,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    padding: 15,
    color: "#2E8B57",
  },

  info: {
    fontSize: 18,
    paddingHorizontal: 15,
    marginBottom: 8,
  },

  description: {
    padding: 15,
    fontSize: 16,
    lineHeight: 24,
  },
});