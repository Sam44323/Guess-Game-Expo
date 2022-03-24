import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PrimaryButton: React.FC = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;
