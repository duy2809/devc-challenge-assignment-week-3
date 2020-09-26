import React, { useState } from "react";
import { Text, View, Modal } from "react-native";
import { getResultColor } from "../utility";

function GameStatus(props) {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {props.result ? (
        <Text style={{ fontSize: 45, color: getResultColor(props.result) }}>
          {props.result}
        </Text>
      ) : (
        <Text style={{ fontSize: 45 }}>Let's play game!</Text>
      )}
    </View>
  );
}

export default GameStatus;
