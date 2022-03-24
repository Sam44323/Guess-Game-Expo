import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

const Title: React.FC = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderColor: "white",
    // borderWidth: Platform.OS === "android" ? 4 : 0,
    borderWidth: Platform.select({ ios: 0, android: 4 }),
    padding: 12,
    maxWidth: "70%",
  },
});
