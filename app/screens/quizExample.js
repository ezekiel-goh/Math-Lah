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
  const [totalScore, setTotalScore] = useState("");
  const [showScore, setShowScore] = useState("");

  const correctAnswerList = () => {

  }

  const successMessage = () =>
    Alert.alert('Great Work!', 'You have completed the quiz.', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Home'),
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
        <View style={styles.quizCircle}>
          <FontAwesome5 name="pencil-ruler" size={27} color="#424242" />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.quizText}>Quiz</Text>
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <View style={styles.outerBox}>
          <View style={styles.innerbox}>
            <Text style={styles.innerBoxText}>Quiz 1</Text>
          </View>
          <View>
            <Text style={styles.outerBoxText}>Addition</Text>
          </View>
        </View>
        <View>
          <Text style={{ color: 'darkred' }}>
            (Fill in the blanks with the question marks below)
          </Text>
        </View>
      </View>

      <View style={{ height: 10 }}></View>

      <ScrollView style={styles.quizScroll}>
        <View>
          <View>
            <Text style={styles.questiontext}>
              1. In Class 1A, there are 19 boys and 25 girls. How many students are
              there altogether?
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 3 }}>
              <ImageBackground
                style={{
                  height: 120,
                  width: 120
                }}
                source={require("../../app/assets/images/Q1.png")}
              >
                <TextInput
                  style={{ marginTop: 82, marginLeft: 42, fontSize: 24 }}
                  maxLength={2}
                  letterSpacing={20}
                  onChangeText={setAnswer1}
                  value={answer1}
                  placeholder='??'
                  keyboardType="numeric"
                />
              </ImageBackground>
            </View>
            <View style={{ flex: 3 }}>
              <Image
                style={{
                  height: 120,
                  width: 120,
                }}
                source={require("../../app/assets/images/Q1photo.png")}
              ></Image>
            </View>
          </View>
        </View>

        <View>
          <View>
            <Text style={styles.questiontext}>
              2. Andy has $32. Ben has $11 more than Andy. How much money does Ben
              have?
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 3 }}>
              <ImageBackground
                style={{
                  height: 120,
                  width: 120
                }}
                source={require("../../app/assets/images/Q2.png")}
              >
                <TextInput
                  style={{ marginTop: 81, marginLeft: 40, fontSize: 24 }}
                  maxLength={2}
                  letterSpacing={20}
                  onChangeText={setAnswer2}
                  value={answer2}
                  placeholder='??'
                  keyboardType="numeric"
                />
              </ImageBackground>
            </View>
            <View style={{ flex: 3 }}>
              <Image
                style={{
                  height: 120,
                  width: 120,
                }}
                source={require("../../app/assets/images/Q2photo.png")}
              ></Image>
            </View>
          </View>
        </View>

        <View>
          <View>
            <Text style={styles.questiontext}>
              3. Add together 6 hundreds, 24 ones. What number do you get?
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 3 }}>
              <ImageBackground
                style={{
                  height: 120,
                  width: 120
                }}
                source={require("../../app/assets/images/Q3.png")}
              >
                <TextInput
                  style={{ marginTop: 80, marginLeft: 38, fontSize: 24 }}
                  maxLength={2}
                  letterSpacing={20}
                  onChangeText={setAnswer3}
                  value={answer3}
                  placeholder='??'
                  keyboardType="numeric"
                />
              </ImageBackground>
            </View>
            <View style={{ flex: 3 }}>
              <Image
                style={{
                  height: 120,
                  width: 120,
                }}
                source={require("../../app/assets/images/Q3photo.png")}
              ></Image>
            </View>
          </View>
        </View>

        <View>
          <View>
            <Text style={styles.questiontext}>
              4. 40 cars and 15 motorcycles were parked in a carpark. What is the
              total number of vehicles parked at the carpark?
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 2 }}>
              <ImageBackground
                style={{
                  height: 120,
                  width: 120
                }}
                source={require("../../app/assets/images/Q4.png")}
              >
                <TextInput
                  style={{ marginTop: 80, marginLeft: 38, fontSize: 24 }}
                  maxLength={2}
                  letterSpacing={20}
                  onChangeText={setAnswer4}
                  value={answer4}
                  placeholder='??'
                  keyboardType="numeric"
                />
              </ImageBackground>
            </View>
            <View style={{ flex: 2 }}>
              <Image
                style={{
                  height: 120,
                  width: 120,
                }}
                source={require("../../app/assets/images/Q4photo.png")}
              ></Image>
            </View>
          </View>
        </View>

        <View style={{ height: 40 }}></View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={successMessage}>
            <View style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ height: 40 }}></View>
      </ScrollView>

      <View style={{ height: 40 }}></View>

      <View style={{ justifyContent: "flex-start", padding: 8, marginTop: 5 }}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <BackBtn text={"Quizzes"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  quizCircle: {
    backgroundColor: "#aca5d9",
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
  quizText: {
    marginTop: 5,
    marginLeft: 15,
    fontSize: 25,
    fontFamily: "NunitoBold",
  },
  outerBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#aca5d9",
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
    backgroundColor: "#aec8c6",
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
  quizScroll: {
    paddingHorizontal: 20,
  },
  submitButton: {
    backgroundColor: "#8a00c2",
    height: 50,
    width: 120,
    borderRadius: 10,
    justifyContent: 'center',
    alignText: "center",
    padding: 8,
  },
  submitButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontFamily: "NunitoBold",
  },
  backBtn: {
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: "-15%",
    marginBottom: "8%",
  },
});

export default App;