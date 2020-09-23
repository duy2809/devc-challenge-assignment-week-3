import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { CHOICES } from "../constants";

function ButtonGroup(props) {
  return (
    <View styles={styles.buttonContainer}>
      {CHOICES.map((item, index) => {
        return (
          <TouchableOpacity
            style={styles.buttonStyle}
            key={index}
            onPress={() => {
              props.onPressButton(item.name);
            }}
          >
            <Text style={styles.buttonText}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    width: 200,
    margin: 10,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#640D14",
  },
  buttonText: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
});

export default ButtonGroup;
