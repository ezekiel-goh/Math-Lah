import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import BackBtn from "../../app/assets/components/backBtn";
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../../app/assets/components/SafeViewAndroid";

export default function App() {
  const [loaded] = useFonts({
    NunitoRegular: require("../../app/assets/fonts/Nunito-Regular.ttf"),
    NunitoBold: require("../../app/assets/fonts/Nunito-Bold.ttf"),
    NunitoLight: require("../../app/assets/fonts/Nunito-Light.ttf"),
    NunitoExtraBold: require("../../app/assets/fonts/Nunito-ExtraBold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  const displayAlert = () =>
    Alert.alert("Touchables!", "Button tapped", [
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
      },
    ]);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View style={styles.aboutHeader}>
        <Ionicons
          style={{ marginTop: "-28%" }}
          name="ios-information-circle"
          size={40}
          color="black"
        />
        <Text style={styles.abtText}>About</Text>
      </View>

      <View styles={styles.aboutBody}>
        {/* About */}
        <View
          style={{
            // flex: 1,
            width: "90%",
            marginLeft: "5%",
            marginTop: "5%",
            // marginBottom: "4%",
            height: 1,
            backgroundColor: "grey",
          }}
        />
        <View style={styles.MathLahWrap}>
          <Image
            style={styles.MathLahLogo}
            source={require("../../app/assets/images/logo.png")}
          />
          <Image
            style={styles.MathLah}
            source={require("../../app/assets/images/mathlah.png")}
          />
        </View>
        <Text style={styles.versionText}>Version</Text>
        <View
          style={{
            // flex: 1,
            width: "90%",
            marginLeft: "5%",
            marginTop: "2%",
            // marginBottom: "4%",
            height: 1,
            backgroundColor: "grey",
          }}
        />
        <Text style={styles.versionNumText}>1.0.0 (Android, iOS)</Text>

        <Text style={styles.devText}>Developers</Text>
        <View
          style={{
            // flex: 1,
            width: "90%",
            marginLeft: "5%",
            marginTop: "2%",
            // marginBottom: "4%",
            height: 1,
            backgroundColor: "grey",
          }}
        />
        <Text style={styles.devPplText}>Ezekiel Goh{"\n"}Heidel Borja</Text>

      </View>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <BackBtn text={"Settings"} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  aboutHeader: {
    height: "6%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: "11%",
    marginTop: "10%",
    alignItems: "center",
  },
  abtText: {
    fontFamily: "NunitoBold",
    fontSize: 30,
    marginLeft: "5%",
  },
  aboutBody: {
    marginTop: "10%",
  },
  MathLahWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    // alignItems: "center",
    marginTop: -20,
    marginLeft: "-16%",
  },
  MathLahLogo: {
    marginTop: 38,
    height: 95,
    width: 95,
  },
  MathLah: {
    marginTop: 74,
    marginLeft: "-40%",
    height: 18,
    width: 96,
  },
  versionText: {
    fontFamily: "NunitoRegular",
    fontSize: 20,
    marginLeft: "6%",
    marginTop: "14%",
  },
  versionNumText: {
    fontFamily: "NunitoRegular",
    fontSize: 20,
    marginLeft: "6%",
    marginTop: "4%",
    color: "#585858",
  },
  devText: {
    fontFamily: "NunitoRegular",
    fontSize: 20,
    marginLeft: "6%",
    marginTop: "14%",
  },
  devPplText: {
    fontFamily: "NunitoRegular",
    fontSize: 17,
    marginLeft: "6%",
    marginTop: "4%",
    color: "#585858",
  },
  backBtn: {
    flex: 1,
    justifyContent: "flex-end",
    marginLeft: "-10%",
    marginBottom: "10%",
  },
});
