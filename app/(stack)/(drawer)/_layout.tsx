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
            headerTitle: "X",
            headerTitleAlign: "center",
            //   return (
            //     <Pressable onPress={openDrawer}>
            //       <Image
            //         style={{
            //           marginHorizontal: 10,
            //           borderRadius: 50,
            //           height: 35,
            //           width: 35,
            //         }}
            //         src={
            //           "https://www.louismuriuki.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flui.d6485f5e.jpg&w=3840&q=75"
            //         }
            //       />
            //     </Pressable>
            //   );
            // },
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
