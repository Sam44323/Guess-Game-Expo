import React from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

interface StartGameProps {
  numberPicker: (value: number) => void;
}

const StartGame: React.FC<StartGameProps> = ({ numberPicker }) => {
  const [numberValue, setNumberValue] = React.useState<string>("");

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(numberValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: () => setNumberValue(""),
        },
      ]);
      return;
    }
    numberPicker(chosenNumber);
    setNumberValue("");
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number!</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={numberValue}
          onChange={(value) => setNumberValue(value.nativeEvent.text)}
        />
        <View style={styles.buttonsContainer}>
          <View style={[styles.buttonContainer, { marginRight: 4 }]}>
            <PrimaryButton handlerFunction={() => setNumberValue("")}>
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton handlerFunction={confirmInputHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
  numberInput: {
    height: 40,
    width: 48,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 3,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
