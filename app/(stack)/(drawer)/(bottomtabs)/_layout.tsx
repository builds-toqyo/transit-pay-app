import { Tabs } from "expo-router";
import React from "react";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="(toptabs)"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => {
            return <Entypo name="home" size={24} color={"black"} />;
          },
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          tabBarIcon: () => {
            return <MaterialIcons name="wallet" size={24} color={"black"} />;
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
                color={"black"}
              />
            );
          },
          headerShown: false,
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
                color={"black"}
              />
            );
          },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => {
            return (
              <MaterialIcons name="account-circle" size={24} color={"black"} />
            );
          },
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: () => {
            return <MaterialIcons name="settings" size={24} color={"black"} />;
          },
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _layout;
