import React from "react";
import { Text, StyleSheet } from "react-native";

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
    borderWidth: 4,
    padding: 12,
  },
});
