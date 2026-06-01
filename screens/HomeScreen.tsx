
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
        }}
        style={styles.logo}
      />

      <Text style={styles.title}>
        HelpPet
      </Text>

      <Text style={styles.subtitle}>
        Encontre seu novo melhor amigo 🐶❤️
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F2FFF5",
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#2E8B57",
  },

  subtitle: {
    marginTop: 10,
    fontSize: 18,
    textAlign: "center",
    color: "#666",
  },
});