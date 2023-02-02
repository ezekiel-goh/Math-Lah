import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import BackBtn from "../../app/assets/components/backBtn";
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../../app/assets/components/SafeViewAndroid";

const App = () => {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const displayAlert = () =>
  Alert.alert("Touchables!", "Button tapped", [
    {
      text: "OK",
      onPress: () => console.log("OK Pressed"),
    },
  ]);

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
 

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={[styles.pagetitle]}>
        <View style={styles.lessonCircle}>
          <FontAwesome5 name="book-open" size={27} color="#000" />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.lessonText}>Lesson</Text>
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <View style={styles.outerBox}>
          <View style={styles.innerbox}>
            <Text style={styles.innerBoxText}>Lesson 1</Text>
          </View>
          <View>
            <Text style={styles.outerBoxText}>Addition</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.lessonScroll}>
        <View>
          <View>
            <Text style={styles.questiontext}>
              There are 5 apples on a tree and 10 more apples grew. How many
              apples are there now?
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 2 }}>
              <Image
                style={{
                  height: 120,
                  width: 350,
                }}
                source={require("../../app/assets/images/L1.png")}
              ></Image>
            </View>
          </View>
        </View>

        <View>
          <View>
            <Text style={styles.questiontext}>
              Geronimo has $55. Thea has $20 more than Geronimo. How much money
              does Thea have?
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 2 }}>
              <Image
                style={{
                  height: 120,
                  width: 350,
                }}
                source={require("../../app/assets/images/L2.png")}
              ></Image>
            </View>
          </View>
        </View>

        <View>
          <View>
            <Text style={styles.questiontext}>
              Add together 6 hundreds, 12 ones. What number do you get?
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 2 }}>
              <Image
                style={{
                  height: 120,
                  width: 350,
                }}
                source={require("../../app/assets/images/L3.png")}
              ></Image>
            </View>
          </View>
        </View>

        <View>
          <View>
            <Text style={styles.questiontext}>
              12 colour pencils and 11 non-coloured pencils were placed in a
              box. What is the total number of pencils placed in the box?
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 2 }}>
              <Image
                style={{
                  height: 120,
                  width: 340,
                }}
                source={require("../../app/assets/images/L4.png")}
              ></Image>
            </View>
          </View>
        </View>
        <View style={{ height: 40 }}></View>
      </ScrollView>

      <View style={{ height: 40 }}></View>

      <View style={{ justifyContent: "flex-start", padding: 8, marginTop: 5 }}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <BackBtn text={"Lessons"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    backgroundColor: "#fcf8f4",
  },
  questiontext: {
    paddingVertical: 30,
    fontSize: 20,
    fontFamily: "NunitoRegular",
  },
  pagetitle: {
    flexDirection: "row",
    margin: 8,
    marginLeft: "10%",
    marginTop: "8%",
    flexWrap: "wrap",
  },

  lessonCircle: {
    backgroundColor: "#D18383",
    padding: 15,
    margin: 8,
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
  lessonText: {
    marginTop: 5,
    marginLeft: 15,
    fontSize: 25,
    fontFamily: "NunitoBold",
  },
  outerBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#E2BCBC",
    height: 90,
    width: "90%",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 14,
    marginBottom: 10,
  },
  outerBoxText: {
    color: "white",
    marginHorizontal: 8,
    fontSize: 25,
    fontFamily: "NunitoBold",
  },
  innerbox: {
    backgroundColor: "#D18383",
    height: 32,
    width: "34%",
    borderRadius: 10,
    alignText: "center",
    padding: "1.35%",
  },
  innerBoxText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "NunitoBold",
  },

  lessonScroll: {
    paddingHorizontal: 20,
  },
  backBtn: {
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: "-15%",
    marginBottom: "8%",
  },
});

export default App;
