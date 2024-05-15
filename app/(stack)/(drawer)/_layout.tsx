import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import { useColorScheme } from "nativewind/dist/stylesheet";
const _layout = () => {
  const { colorScheme } = useColorScheme();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          headerStyle: {
            backgroundColor: colorScheme === "dark" ? "#181818" : "#fff",
          },
          drawerStyle: {
            backgroundColor: colorScheme === "dark" ? "#181818" : "#fff",
          },
          headerTintColor: colorScheme === "dark" ? "white" : "black",
        }}
      >
        <Drawer.Screen
          name="(bottomtabs)"
          options={{
            title: "",
            headerTitle: "Transport Wallet",
            headerTitleAlign: "center",

            headerRight: () => {
              return (
                <View style={{ marginHorizontal: 20 }}>
                  <Feather
                    name="settings"
                    size={24}
                    color={colorScheme === "dark" ? "white" : "black"}
                  />
                </View>
              );
            },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default _layout;
