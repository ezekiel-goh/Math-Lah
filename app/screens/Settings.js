import React, { Component, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { FontAwesome5 } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import BackBtn from "../assets/components/backBtn";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SafeViewAndroid from "../assets/components/SafeViewAndroid";
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import Dialog from "react-native-dialog";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const displayAlert = () =>
  Alert.alert("Touchables!", "Button tapped", [
    {
      text: "OK",
      onPress: () => console.log("OK Pressed"),
    },
  ]);

const PROFILES = [
  {
    icon: "account-circle",
    color: "#C88484",
    label: "Rachel Tan",
  },
  {
    icon: "account-circle",
    color: "#ACA5D9",
    label: "Mark Tan",
  },
];

const addPROFILES = [
  {
    icon: "pluscircleo",
    color: "grey",
    label: "Add Profile",
  },
];

export default function App() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const navigation = useNavigation();
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
  const [signinStatus, setSigninStatus] = useState("");
  const [loaded] = useFonts({
    NunitoRegular: require("../../app/assets/fonts/Nunito-Regular.ttf"),
    NunitoBold: require("../../app/assets/fonts/Nunito-Bold.ttf"),
    NunitoLight: require("../../app/assets/fonts/Nunito-Light.ttf"),
    NunitoExtraBold: require("../../app/assets/fonts/Nunito-ExtraBold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  //Sign Out FIREBASE
  const onHandleSignout = async () => {
    try {
      await signOut(auth);
      {
        navigation.navigate("Login");
      }
      setSigninStatus("Signout");
    } catch (error) {
      setSigninStatus(error.message);
      console.log(error.message);
    }
  };
  // const [range, setRange] = useState('50%');
  // const [sliding, setSliding] = useState('Inactive');

return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.settingsHeader}>
        <View style={styles.setCircle}>
          <Ionicons
            style={styles.setIcon}
            name="settings-sharp"
            size={30}
            color="black"
          />
        </View>
        <Text
          style={{
            marginTop: 16,
            marginLeft: 15,
            fontSize: 25,
            fontFamily: "NunitoBold",
          }}
        >
          Settings
        </Text>
      </View>

      <ScrollView styles={styles.ScrollView}>
          <View style={styles.nameHeader}>
            <Text
              style={{
                marginTop: 28,
                fontSize: 32,
                color: "#4E4D4C",
                fontFamily: "NunitoBold",
              }}
            >
              User
            </Text>
            <MaterialIcons
              style={styles.nameAvatar}
              name="account-circle"
              size={70}
              color="#AEC8E6"
            />
          </View>

       {/* Preferences */}
       <Text
            style={{
              paddingVertical: 12,
              marginLeft: "5%",
              marginTop: 16,
              fontSize: 17,
              fontWeight: "600",
              color: "#000",
              marginBottom: 8,
              fontFamily: "NunitoBold",
            }}
          >
            Preferences
          </Text>
          <View
            style={{
              width: "90%",
              marginLeft: "5%",
              marginTop: "-2%",
              marginBottom: "4%",
              height: 1,
              backgroundColor: "grey",
            }}
          />

          <View style={styles.alertSnd}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <FontAwesome5
                style={styles.volIcon}
                name="volume-down"
                size={38}
                color="#767573"
              />
              <Text
                style={{
                  fontFamily: "NunitoRegular",
                  fontSize: 16,
                  marginTop: "10%",
                  marginLeft: 15,
                }}
              >
                Alert Sounds
              </Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="black"
              maximumTrackTintColor="grey"
              thumbTintColor="black"
              value={0.5}
              // onValueChange={value => setRange(parseInt(value * 100) + '%' )}
            />
          </View>

          <View style={styles.notif}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Octicons
                style={styles.notifIcon}
                name="bell-fill"
                size={33}
                color="#767573"
              />
              <Text
                style={{
                  fontFamily: "NunitoRegular",
                  fontSize: 16,
                  marginTop: "10%",
                  marginLeft: 15,
                }}
              >
                Notifications
              </Text>
            </View>
            <Switch
              style={styles.notifSwitch}
              value={isEnabled}
              onValueChange={(value) => setIsEnabled(value)}
              trackColor={{ false: "#fff", true: "#4ed164" }}
            />
          </View>
          <Text
            style={{
              paddingVertical: 12,
              marginLeft: "5%",
              marginTop: 16,
              fontSize: 17,
              fontWeight: "600",
              color: "#000",
              marginBottom: 8,
              fontFamily: "NunitoBold",
            }}
          >
            Account
          </Text>
          <View
            style={{
              flexDirection: "column",
              width: "90%",
              marginLeft: "5%",
              marginTop: "-2%",
              marginBottom: "4%",
              height: 1,
              backgroundColor: "grey",
            }}
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={onHandleSignout}
          >
            <Text
              style={{
                color: "red",
                fontSize: 18,
                textAlign: "center",
                fontFamily: "NunitoExtraBold",
                marginTop: "6%",
              }}
            >
              Log Out
            </Text>
          </TouchableOpacity>

      <View style={{ height: "4%" }}></View>
</ScrollView>

      <View style={{ justifyContent: "flex-start", padding: 8, marginTop: 20 }}>
        <View
          style={{ justifyContent: "flex-start", padding: 8, marginTop: 5 }}
        ></View>
      </View>

      <View style={styles.backNAbout}>
            <TouchableOpacity 
            style={styles}
            onPress={() => navigation.goBack()}>
              {/* <MaterialIcons style={styles.backArrow} name="arrow-back-ios" size={32} color="black" /> */}
              <BackBtn text={"Home"} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.aboutBtn}
              onPress={() => navigation.navigate("About")}
            >
              <Ionicons
                style={{ marginTop: "-28%" }}
                name="ios-information-circle"
                size={24}
                color="black"
              />
              <Text
                style={{
                  fontFamily: "NunitoRegular",
                  fontSize: 20,
                  marginTop: "-26%",
                  marginLeft: "5%",
                }}
              >
                About
              </Text>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  );
};
// };

// const LessonTitle = ({ item }) => {
//   const navigation = useNavigation();
//   return (
//   <View style={styles.button}>
//   <TouchableOpacity
//     style={{
//       backgroundColor: "#77A8A5",
//       height: 50,
//       width: "90%",
//       borderRadius: 15,
//     }}
//   >
//     <View>
//       <View
//         style={{
//           margin: 8,
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Text style={styles.topicText}>{item.text}</Text>
//       </View>
//     </View>
//   </TouchableOpacity>
// </View>
//   );
// };

const styles = StyleSheet.create({
  settingsHeader: {
    // flex: "0.86%",
    height: "6%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: "11%",
    marginTop: "8%",
  },

  setCircle: {
    backgroundColor: "#C6E2AF",
    height: 60,
    width: 60,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 14,
  },
  setIcon: {
    paddingLeft: 13,
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  nameHeader: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    // alignItems: "center",
    marginTop: 30,
  },
  nameAvatar: {
    paddingLeft: 14.5,
    paddingTop: 14,
    // marginTop: -2,
  },


  fullRow: {
    justifyContent: "space-between",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 60,
    marginBottom: "2%",
    marginLeft: 10,
    paddingLeft: 12,
    paddingRight: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  minusIcon: {
    marginRight: "10%",
  },
  plusIcon: {
    marginLeft: "3%",
    marginRight: "1%",
  },

  alertSnd: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    // alignItems: "center",
  },
  volIcon: {
    marginTop: 10,
  },

  slider: {
    marginTop: 5,
    width: "45%",
    height: 40,
  },

  // textNotif

  notif: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: "5%",
  },
  notifIcon: {
    marginTop: 10,
  },
  notifSwitch: {
    marginLeft: "33%",
    marginTop: 4,
    height: 40,
  },


  backNAbout: {
    marginBottom: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  aboutBtn: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: "8%",
    marginTop: "-4.9%",
  },
  backBtn: {
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: "-10%",
    marginBottom: "10%",
  },
});