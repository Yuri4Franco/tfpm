import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaHome from "@/src/telas/TelaHome";
const Tab = createBottomTabNavigator();
export default function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen  name="Home" component={TelaHome}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
});
