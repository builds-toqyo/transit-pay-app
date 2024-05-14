import { Tabs } from "expo-router";
import React from "react";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const _layout = () => {
  return (
    <Tabs

    >
      <Tabs.Screen
        name="(toptabs)"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => {
            return (
              <AntDesign
                name="home"
                size={24}
                color={ "dark" ? "white" : "black"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="call"
        options={{
          tabBarIcon: () => {
            return (
              <Ionicons
                name="call"
                size={24}
                color={ "dark" ? "white" : "black"}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: () => {
            return (
              <AntDesign
                name="mail"
                size={24}
                color={ "dark" ? "white" : "black"}
              />
            );
          },
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;
