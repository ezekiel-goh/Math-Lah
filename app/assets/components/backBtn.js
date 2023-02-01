import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const BackBtn = (props) => {
  return (
    <View style={styles.textBackIcon}>
      <MaterialIcons
        style={styles.backArrow}
        name="arrow-back-ios"
        size={32}
        color="black"
      />
      <Text style={styles.textBack}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBackIcon: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: "-23%",
    marginLeft: "10%",


  },
  backArrow: {
    marginLeft: "10%",
  },
  textBack: {
    alignItems: "center",
    marginLeft: "2%",
    fontFamily: "NunitoBold",
    fontSize: 20,
  },
});

export default BackBtn;
