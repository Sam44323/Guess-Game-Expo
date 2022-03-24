import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../constants/colors";

export const Card: React.FC = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
