import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import PetsScreen from "../screens/PetsScreen";
import DetailScreen from "../screens/DetailScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function PetStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PetsList"
        component={PetsScreen}
        options={{
          title: "Pets para Adoção",
        }}
      />

      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: "Detalhes do Pet",
        }}
      />
    </Stack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: any;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Pets") {
              iconName = "paw";
            } else {
              iconName = "person";
            }

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },

          tabBarActiveTintColor: "#2E8B57",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />

        <Tab.Screen
          name="Pets"
          component={PetStack}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}