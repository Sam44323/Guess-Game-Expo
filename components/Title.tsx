import React from "react";
import { Text, StyleSheet } from "react-native";

const Title: React.FC = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderColor: "#ddb52f",
    borderWidth: 4,
    padding: 12,
  },
});
