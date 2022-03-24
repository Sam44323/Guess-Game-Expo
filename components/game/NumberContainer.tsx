import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export const NumberContainer: React.FC = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    color: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
