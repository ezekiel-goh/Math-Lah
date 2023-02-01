import React from "react";
import {
  Alert,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const App = (props) => {
  // Display message if buttons are working
  const displayAlert = () =>
    Alert.alert("Success!", "Button is working", [
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

  // JSX
  return (
    <View style={styles.container}>
      <View style={{ margin: 20, alignItems: "center" }}>
        <Ionicons
          name="person-circle"
          size={104}
          color="#AEC8C6"
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 2,
              height: 4,
            },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 14,
          }}
        />
        <Text style={{ fontSize: 30, paddingHorizontal: 10,  fontFamily: "NunitoBold", }}>User</Text>
      </View>

      <View style={{ margin: 30, justifyContent: "center" }}>
        <View style={styles.twoColumn}>
          <TouchableOpacity
            style={{
              backgroundColor: "#e2bcbc",
              height: 140,
              width: 130,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
              borderRadius: 25,
              shadowColor: "#000",
              shadowOffset: {
                width: 2,
                height: 4,
              },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 14,
            }}
            onPress={() => navigation.navigate("Lesson List")}
          >
            <Ionicons name="book" size={48} color="#424242" />
            <Text style={{ color: "black", fontSize: 20, fontFamily: "NunitoRegular", }}>Lesson</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#bce4e2",
              height: 140,
              width: 130,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
              borderRadius: 25,
              shadowColor: "#000",
              shadowOffset: {
                width: 2,
                height: 4,
              },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 14,
            }}
            onPress={()=> navigation.navigate('Pro List')}
          >
            <Ionicons name="md-stats-chart" size={48} color="#424242" />
            <Text style={{ color: "black", fontSize: 20, fontFamily: "NunitoRegular", }}>Progress</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.twoColumn}>
          <TouchableOpacity
            style={{
              backgroundColor: "#aca5d9",
              height: 140,
              width: 130,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
              borderRadius: 25,
              shadowColor: "#000",
              shadowOffset: {
                width: 2,
                height: 4,
              },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 14,
            }}
            onPress={() => navigation.navigate("Quiz List")}
          >
            <Ionicons name="pencil" size={48} color="#424242" />
            <Text style={{ color: "black", fontSize: 20, fontFamily: "NunitoRegular", }}>Quiz</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#c6e2a4",
              height: 140,
              width: 130,
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
              borderRadius: 25,
              shadowColor: "#000",
              shadowOffset: {
                width: 2,
                height: 4,
              },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 14,
            }}
            onPress={() => navigation.navigate("Settings")}
          >
            <Ionicons name="settings" size={48} color="#424242" />
            <Text style={{ color: "black", fontSize: 20, fontFamily: "NunitoRegular", }}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;

// stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcf8f4",
  },
  twoColumn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
