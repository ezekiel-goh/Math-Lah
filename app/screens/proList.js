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
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
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

const ProgressUnlocked = [{ id: 0, text: "Addition", name: "Progress List" }];
const ProgressLocked = [
  { id: 1, text: "Subtraction" },
  { id: 2, text: "Multiplication" },
  { id: 3, text: "Division" },
  { id: 4, text: "Shapes" },
  { id: 5, text: "Number Patterns" },
];

const App = () => {
  const navigation = useNavigation();
  const renderProgressUnlocked = ({ item }) => <ProgressUnlocked item={item} />;
  const renderProgressLocked = ({ item }) => <ProgressLocked item={item} />;
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
      <View style={styles.proListHeader}>
        <View style={styles.proCircle}>
          <Ionicons
            style={styles.proIcon}
            name="md-stats-chart"
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
          Progress
        </Text>
      </View>

      <View style={{ flex: 17, marginTop: 30 }}>
        {/* <FlatList
          data={Lessons}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View> */}
        {/* <FlatList
          data={ProgressLocked}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => ( */}
        {ProgressUnlocked.map((item) => {
          return (
            <TouchableOpacity
              key={item.text}
              onPress={() => {
                navigation.navigate("Pro Example");
              }}
            >
              <View style={styles.button}>
                <View
                  style={{
                    backgroundColor: "#528aae",
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

        {/* <FlatList
          data={ProgressLocked}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => ( */}
        {ProgressLocked.map((item) => {
          return (
            <TouchableOpacity
              key={item.text}
              onPress={() => {
                alert(item.text + " was not attempted");
              }}
            >
              <View style={styles.button}>
                <View
                  style={{
                    backgroundColor: "#528aae",
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
  proListHeader: {
    height: "6%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: "11%",
    marginTop: "8%",
  },
  proCircle: {
    backgroundColor: "#BCE4E2",
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
  proIcon: {
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

