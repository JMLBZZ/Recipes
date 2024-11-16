import React from "react";
import { View, Text } from "react-native";
import {globalStyles} from "../styles/AppStyles"


export default function Counter({ tasks = [] }) {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;

    //console.log("Total Tasks:", totalTasks, "Completed Tasks:", completedTasks);


    return (
        <View style={globalStyles.containerCounter}>
            <View style={globalStyles.itemCounter}>
                <Text style={globalStyles.textCounter}>{completedTasks}</Text>
                <Text style={globalStyles.textCounter}>{totalTasks}</Text>
            </View>
            <View style={globalStyles.itemCounter}>
                <Text style={globalStyles.textTitleCounter}>Complétées</Text>
                <Text style={globalStyles.textTitleCounter}>Total</Text>
            </View>
        </View>
    );
}
