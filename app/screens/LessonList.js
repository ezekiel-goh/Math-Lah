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
// import { List } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import BackBtn from "../../app/assets/components/backBtn";
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../../app/assets/components/SafeViewAndroid";
// import { StackNavigator } from "react-navigation";

// const Stack = createStackNavigator();

// function LessonStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Lesson List" component={LessonList} />
//     </Stack.Navigator>
//   );
// }

class LessonDetailScreen extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Lesson Example" component={LessonExample} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const LessonsUnlocked = [{ id: 0, text: "Addition", name: "Lesson List" }];
const LessonsLocked = [
  { id: 1, text: "Subtraction" },
  { id: 2, text: "Multiplication" },
  { id: 3, text: "Division" },
  { id: 4, text: "Shapes" },
  { id: 5, text: "Number Patterns" },
];

// display message when button is pressed
const displayAlert = () =>
  Alert.alert("Touchables!", "Button tapped", [
    {
      text: "OK",
      onPress: () => console.log("OK Pressed"),
    },
  ]);

const App = () => {
  // function to render an item in the list
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const navigation = useNavigation();
  const renderLessonUnlocked = ({ item }) => <LessonUnlocked item={item} />;
  const renderLessonlocked = ({ item }) => <LessonLocked item={item} />;
  
  const [loaded] = useFonts({
    NunitoRegular: require("../../app/assets/fonts/Nunito-Regular.ttf"),
    NunitoBold: require("../../app/assets/fonts/Nunito-Bold.ttf"),
    NunitoLight: require("../../app/assets/fonts/Nunito-Light.ttf"),
    NunitoExtraBold: require("../../app/assets/fonts/Nunito-ExtraBold.ttf"),
  });
  if (!loaded) {
    return null;
  }
 

  // const LessonList = ({ navigation, route }) => {
  //   const { item } = route.params;

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.lessonListHeader}>
        <View style={styles.lessonCircle}>
          <FontAwesome5
            style={styles.lessonIcon}
            name="book-open"
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
          Lessons
        </Text>
      </View>

      <View style={{ flex: 17, marginTop: 30 }}>
        {LessonsUnlocked.map((item) => {
          return (
            <TouchableOpacity
              key={item.text}
              onPress={() => {
                navigation.navigate("Lesson Example");
              }}
            >
              <View style={styles.button}>
                <View
                  style={{
                    backgroundColor: "#D18383",
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
        
        {LessonsLocked.map((item) => {
          return (
            <TouchableOpacity
              key={item.text}
              onPress={() => {
                Alert.alert(item.text + ' is Locked', " Review the undone lesson(s) to unlock " + item.text, [{text:"Sure Thing:)"}]);
              }}
            >
              <View style={styles.button}>
                <View
                  style={{
                    backgroundColor: "#D18383",
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
  lessonListHeader: {
    // flex: "0.86%",
    height: "6%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: "11%",
    marginTop: "8%",
  },
  lessonCircle: {
    backgroundColor: "#E2BCBC",
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
  lessonIcon: {
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
