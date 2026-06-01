
import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
} from "react-native";

import { pets } from "../data/pets";
import PetCard from "../components/PetCard";

export default function PetsScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PetCard
            pet={item}
            onPress={() =>
              navigation.navigate("Detail", {
                pet: item,
              })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F5F5F5",
  },
});