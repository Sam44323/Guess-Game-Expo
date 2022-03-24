import { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGame from "./screens/StartGame";
import Game from "./screens/Game";

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
    <LinearGradient style={styles.rootScreen} colors={["#4e0329", "#ddb52f"]}>
      <ImageBackground
        source={require("./assets/background.png")}
        height={1}
        width={1}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
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
