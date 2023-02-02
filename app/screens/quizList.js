import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  FlatList,
  Alert,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import BackBtn from "../../app/assets/components/backBtn";
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../../app/assets/components/SafeViewAndroid";

class QuizDetailScreen extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Quiz Example" component={QuizExample} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const QuizzesUnlocked = [{ id: 0, text: "Addition", name: "Quiz List" }];
const QuizzesLocked = [
  { id: 1, text: "Subtraction" },
  { id: 2, text: "Multiplication" },
  { id: 3, text: "Division" },
  { id: 4, text: "Shapes" },
  { id: 5, text: "Number Patterns" },
];

// display message when button is pressed
const displayAlert = () =>
  Alert.alert("Success!", "Button pressed", [
    {
      text: "OK",
      onPress: () => console.log("OK Pressed"),
    },
  ]);

const App = () => {
  const navigation = useNavigation();
  const renderQuizUnlocked = ({ item }) => <QuizzesUnlocked item={item} />;
  const renderQuizLocked = ({ item }) => <QuizzesLocked item={item} />;
  
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
      <View style={styles.quizListHeader}>
        <View style={styles.quizCircle}>
          <FontAwesome5
            style={styles.quizIcon}
            name="pencil-ruler"
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
          Quizzes
        </Text>
      </View>

      <View style={{ flex: 17, marginTop: 30 }}>
        {QuizzesUnlocked.map((item) => {
          return (
            <TouchableOpacity
              key={item.text}
              onPress={() => {
                navigation.navigate("Quiz Example");
              }}
            >
              <View style={styles.button}>
                <View
                  style={{
                    backgroundColor: "#B19CD9",
                    height: 50,
                    width: "90%",
                    borderRadius: 15,
                  }}
                >
                  <View>
                    <View
                      style={{
                        margin: 8,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={styles.topicText}>{item.text}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}

        {QuizzesLocked.map((item) => {
          return (
            <TouchableOpacity
              key={item.text}
              onPress={() => {
                alert(item.text + " is locked");
              }}
            >
              <View style={styles.button}>
                <View
                  style={{
                    backgroundColor: "#b19cd9",
                    height: 50,
                    width: "90%",
                    borderRadius: 15,
                  }}
                >
                  <View>
                    <View
                      style={{
                        margin: 8,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={styles.topicText}>{item.text}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={{ height: "4%" }}></View>

      <View style={{ justifyContent: "flex-start", padding: 8, marginTop: 20 }}>
        <View
          style={{ justifyContent: "flex-start", padding: 8, marginTop: 5 }}
        ></View>
      </View>

      <View styles={styles.backBtnView}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <BackBtn text={"Home"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  quizListHeader: {
    height: "6%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: "11%",
    marginTop: "8%",
  },
  quizCircle: {
    backgroundColor: "#ACA5D9",
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
  quizIcon: {
    paddingLeft: 13,
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 10,
    marginLeft: "10%",
  },
  pagetitle: {
    flexDirection: "row",
    margin: 8,
    marginLeft: "10%",
    marginTop: "8%",
    // flexWrap: "wrap",
  },

  lessonText: {
    marginTop: 5,
    marginLeft: 15,
    fontSize: 25,
    fontFamily: "NunitoBold",
  },
  topicText: {
    color: "white",
    fontFamily: "NunitoBold",
    padding: "1%",
    fontSize: 20,
  },
  backBtnView: {
    height: "6%",
    marginBottom: "30%",
  },
  backBtn: {
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: "-10%",
    marginBottom: "10%",
  },
});

export default App;

