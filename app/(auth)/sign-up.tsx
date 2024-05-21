import { StyleSheet, Dimensions, Text, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";

const SignUp = () => {
  const [form, setForm] = React.useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.title}>Register</Text>
          <FormField
            title="Full Name"
            value={form.fullname}
            otherStyles={styles.formField}
            keyboardType="default"
            placeholder="Full Name"
            handleChangeText={(e) => setForm({ ...form, fullname: e })}
          />
          <FormField
            title="Username"
            value={form.username}
            otherStyles={styles.formField}
            keyboardType="default"
            placeholder="Username"
            handleChangeText={(e) => setForm({ ...form, username: e })}
          />
          <FormField
            title="Email"
            value={form.email}
            otherStyles={styles.formField}
            keyboardType="email-address"
            placeholder="
            Email Address"
            handleChangeText={(e) => setForm({ ...form, email: e })}
          />
          <FormField
            title="Password"
            value={form.password}
            otherStyles={styles.formField}
            placeholder="
            Password"
            handleChangeText={(e) => setForm({ ...form, password: e })}
          />
          
          <FormField
            title="Repeat Password"
            value={form.repeatPassword}
            otherStyles={styles.formField}
            placeholder="Repeat Password"
            handleChangeText={(e) => setForm({ ...form, repeatPassword: e })}
          />
          <CustomButton
            title="Sign Up"
            containerStyles={styles.signUpButton}
            handlePress={() => {
         
            }}
          />
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Have an account already?</Text>
            <Link href="/sign-in" style={styles.loginLink}>
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 24,
    minHeight: Dimensions.get('window').height - 100,
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: '700',
    color: '#1F41BB',
    textAlign: 'center',

    // fontFamily: 'bold',

  },
  formField: {
    marginTop: 4,
  },
  signUpButton: {
    marginTop: 16,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  loginText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'pregular',
  },
  loginLink: {
    fontSize: 18,
    fontFamily: 'psemibold',
    color: '#1F41BB', 
    marginLeft: 4,
  },
});
