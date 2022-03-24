import { useState } from "react";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGame from "./screens/StartGame";
import Game from "./screens/Game";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState<number>(0);

  const numberPicker = (value: number) => {
    setUserNumber(value);
  };

  const screen = userNumber ? (
    <Game />
  ) : (
    <StartGame numberPicker={numberPicker} />
  );

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[`${Colors.primary700}`, `${Colors.accent500}`]}
    >
      <ImageBackground
        source={require("./assets/background.png")}
        resizeMode="cover"
        height={1}
        width={1}
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
