import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  LogBox
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
// import app from "../../app/firebase.key";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";



function LoginScreen(props) {
  const firebaseConfig = {
    apiKey: "AIzaSyDEosRlax6ljiej2tXXRAMOgYe0mkZJ4Ys",
    authDomain: "mathlah.firebaseapp.com",
    projectId: "mathlah",
    storageBucket: "mathlah.appspot.com",
    messagingSenderId: "145066155253",
    appId: "1:145066155253:web:d5d5a56778309701f979bc",
    measurementId: "G-Q90H8XSL46",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupstatus, setSignupStatus] = useState("");

  const navigation = useNavigation();

  const [loaded] = useFonts({
    NunitoRegular: require("../../app/assets/fonts/Nunito-Regular.ttf"),
    NunitoBold: require("../../app/assets/fonts/Nunito-Bold.ttf"),
    NunitoLight: require("../../app/assets/fonts/Nunito-Light.ttf"),
    NunitoExtraBold: require("../../app/assets/fonts/Nunito-ExtraBold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  //Sign Up FIREBASE
  const onHandleSignup = async () => {
    try {
      if (email !== "" && password !== "") {
        await createUserWithEmailAndPassword(auth, email, password);
        {
          navigation.navigate("Login");
        }
      }
    } catch (error) {
        setSignupStatus("Invalid email or email in use");
      console.log(error.message);
    }
  };

  
  LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        {/* Title Logo */}
        <View>
          <Image
            style={styles.CreateAccountImg}
            source={require("../../app/assets/images/createAccount.png")}
          />
        </View>
      </View>

      {/* Email Input */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter an email address"
          // autoFocus={true}
          value={email}
          autoCapitalize={false}
          autoCorrect={false}
          secureTextEntry={false}
          placeholderTextColor="grey"
          onChangeText={(text) => setEmail(text)} //useState
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your password"
          placeholderTextColor="grey"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)} //useState
        />
      </View>
      <Text style={styles.loginStatus}>{signupstatus}</Text>

   

      {/* Login Input */}
      <TouchableOpacity style={styles.loginButton} onPress={onHandleSignup}>
        <Text style={styles.loginText}>Create Account</Text>
      </TouchableOpacity>

      {/* Cancel Button */}
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.cancelButton}>Cancel</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF8F4",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },

  view: {
    paddingTop: 70,
    alignItems: "center",
  },

  logo: {
    marginBottom: 60,
    height: "1%",
    width: "1%",
    // position: "relative",
  },

  CreateAccountImg: {
    marginBottom: 60,
    height: 30,
    width: 290,
    position: "relative",
  },

  inputView: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    borderWidth: 1.6,
    color: "black",
    width: "70%",
    height: 55,
    marginBottom: 20,
    alignItems: "center",
    // top: -48,
    position: "relative",
  },
  loginStatus: {
    color: "red",
    fontFamily: "NunitoRegular",
    marginTop: -6
    },
  TextInput: {
    height: "100%",
    width: "100%",
    flex: 1,
    padding: 10,
    marginLeft: 0,
    fontFamily: "NunitoRegular",
    // flexDirection: "column-reverse"
  },

  forgotButton: {
    height: 30,
    marginTop: 15,
    marginBottom: 25,
    // top: -38,
    color: "#C88484",
    fontFamily: "NunitoBold",
  },

  loginButton: {
    width: "80%",
    borderRadius: 30,
    height: 60,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#1E958E",
  },

  loginText: {
    height: "100%",
    width: "100%",
    fontSize: 15,
    textAlign: "center",
    justifyContent: "center",
    padding: 18,
    color: "white",
    fontFamily: "NunitoBold",
  },

  cancelButton: {
    height: 30,
    marginBottom: 30,
    bottom: -70,
    color: "#C88484",
    alignSelf: "flex-end",
    fontFamily: "NunitoBold",
  },
});

export default LoginScreen;
