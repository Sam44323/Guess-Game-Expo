import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Title: React.FC = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderColor: Colors.accent500,
    borderWidth: 4,
    padding: 12,
  },
});
