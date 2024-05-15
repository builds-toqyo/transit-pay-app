import { Tabs } from "expo-router";
import React from "react";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons
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
              <Entypo
                name="wallet"
                size={24}
                color={ "black"}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="transport"
        options={{
          tabBarIcon: () => {
            return (
              <MaterialIcons
                name="emoji-transportation"
                size={24}
                color={ "black"}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="analytics"
        options={{
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name="google-analytics"
                size={24}
                color={ "black"}
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
