import { View, SafeAreaView, Text } from "react-native"
import React from "react"
import {globalStyles} from "../styles/AppStyles"
import HomeTask from "./HomeTask"

const TaskList = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <HomeTask/>
    </SafeAreaView>
  )
}

export default TaskList