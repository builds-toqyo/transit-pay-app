import { StyleSheet, Dimensions, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from "expo-router";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";

const SignUp = () => {
  return (
     <SafeAreaView>
        <ScrollView>
            <View
            className="flex justify-center w-full h-full px-4 my-6"
            style={{
                minHeight: Dimensions.get("window").height - 100,
            }}
            >
                
                <Text className="mt-10 text-2xl font-semibold text-black font-psemibold">
                     Signup to Transitease
                </Text>
                <FormField
                  title="Username"
                  value=""
                  otherStyles="mt-7"
                  keyboardType="email-address"
                />
                <FormField
                  title="Email"
                  value=""
                  otherStyles="mt-7"
                  keyboardType="email-address"
                />

                <FormField
                  title="Password"
                  value=""
                  otherStyles="mt-7"
                />

                <CustomButton
                  title="Sign In"
                  containerStyles="mt-7"
                />
                <View className="flex flex-row justify-center gap-2 pt-5">
                  <Text className="text-lg text-gray-100 font-pregular">
                    Have an account already?
                  </Text>
                  <Link
                    href="/sign-in"
                    className="text-lg font-psemibold text-secondary"
                  >
                    Login
                  </Link>
                </View>

            </View>
        </ScrollView>
     </SafeAreaView>
  )
}

export default  SignUp

const styles = StyleSheet.create({})