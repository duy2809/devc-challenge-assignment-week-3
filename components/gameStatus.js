import React from "react";
import { Text, View } from "react-native";
import { getResultColor } from "../utility";

function GameStatus(props) {
  return (
    <View>
      <Text style={{ fontSize: 35, color: getResultColor(props.result) }}>
        {props.result}
      </Text>
    </View>
  );
}

export default GameStatus;
