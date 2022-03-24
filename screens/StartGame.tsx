import React from "react";
import { View, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGame: React.FC = () => {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default StartGame;
