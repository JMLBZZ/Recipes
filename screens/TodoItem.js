import React, {useState}from "react";
import { View, Text, TouchableOpacity } from "react-native";
//import { Checkbox } from "react-native-paper";
import { globalStyles } from "../styles/AppStyles";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck'


export default function TodoItem({ task, deleteTask, toggleCompleted }) {
    //const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
    const [checked, setChecked] = React.useState(false);


    return (
        <View style={globalStyles.todoItem}>
            <TouchableOpacity 
                onPress={() => toggleCompleted(task.id)} 
                style={globalStyles.todoTouchable}
            >
                <FontAwesomeIcon 
                    icon={faCircleCheck} 
                    color={task.completed ? "green" : "grey"}
                />

                <Text style={{
                    ...globalStyles.todoItemText,
                    color: task.completed ? "grey" : "black",
                    textDecorationLine: task.completed ? "line-through" : "none",
                    }}
                >
                    {task.text}
                </Text>
            </TouchableOpacity>

                <FontAwesome.Button 
                    name="trash" 
                    onPress={() => deleteTask(task.id)} 
                    style={globalStyles.deleteButton}
                />
        </View>
    );
}