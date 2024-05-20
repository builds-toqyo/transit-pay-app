import React from "react";
import "../global.css";
import MainLayout from "./(stack)/_layout";
import Authlayout from "./(auth)/_layout";
import { Stack } from "expo-router";


const _layout = () => {
  return (
    <>
       <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          {/* <Stack.Screen name="(stack)" options={{ headerShown: false }} /> */}
       </Stack>
    </>
  );
};

export default _layout;
