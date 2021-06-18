import React from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";



export const GoalItem = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
