// Componente PetCard
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface Props {
  pet: any;
  onPress: () => void;
}

export default function PetCard({ pet, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: pet.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{pet.name}</Text>

        <Text style={styles.text}>
          {pet.breed}
        </Text>

        <Text style={styles.text}>
          {pet.age}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginVertical: 8,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
  },

  image: {
    width: "100%",
    height: 180,
  },

  info: {
    padding: 12,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2E8B57",
  },

  text: {
    fontSize: 16,
    color: "#555",
    marginTop: 4,
  },
});