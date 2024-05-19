import { View, Text } from "react-native";
import React from "react";
import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);
const RootLayout = () => {
  return (
    <View className="flex-1 bg-white">
    <View className="flex-row items-center mx-12 my-9 bg-[#1F41BB] justify-between px-12 py-12 rounded-2xl">
      <View className="flex">
        <Text className="text-lg font-bold text-white">Balance</Text>
        <Text className="text-xl text-white">Ksh 1000</Text>
      </View>
      <Ionicons name="add-circle-outline" size={32} color="white" />
    </View>
    <View className="flex-row justify-around px-4 py-2 bg-gray-200">
      <Text className="text-base">Transfer</Text>
      <Text className="text-base">Payment</Text>
      <Text className="text-base">Payout</Text>
      <Text className="text-base">Top Up</Text>
    </View>
    <View className="px-4 py-5">
      <View className="flex-row justify-between">
        <Text className="mb-2 text-lg font-bold">Last Transaction</Text>
        <Text className="text-base text-right text-gray-400">View All</Text>
      </View>
      <View className="mt-4">
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-lg text-gray-400">N</Text>
          <Text className="text-lg">Kenya Airways</Text>
          <Text className="text-lg">$12.00</Text>
        </View>
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-lg text-gray-400">P</Text>
          <Text className="text-lg">Nairobi Terminers</Text>
          <Text className="text-lg">$10.00</Text>
        </View>
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-lg text-gray-400"></Text>
          <Text className="text-lg">Supermetro</Text>
          <Text className="text-lg">Ksh 52.00</Text>
        </View>
      </View>
    </View>
  </View>
  );
};

export default RootLayout;