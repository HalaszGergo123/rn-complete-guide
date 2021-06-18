import React, { useState } from 'react'
import {
    Button,
    StyleSheet,
    TextInput,
    View,
    FlatList,
    TouchableWithoutFeedback
} from "react-native";

export const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
            <View style={styles.inputContainer} >
                <TextInput
                    onChangeText={goalInputHandler}
                    placeholder="Course Goal"
                    style={styles.input}
                    value={enteredGoal}
                />
                <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
            </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
    },
});

