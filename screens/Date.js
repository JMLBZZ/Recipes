import { Text, View } from "react-native"
import React from "react"
import {globalStyles} from "../styles/AppStyles"


export default function DateHeader() {
    const today = new Date();

    const formattedDate = today.toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

  return (
    <View style={globalStyles.containerDate}>
      <Text style={globalStyles.dateText}>
            <Text style={{ fontWeight: "bold", }}>{formattedDate.split(" ")[0]}</Text>{" "}
            {formattedDate.slice(formattedDate.indexOf(" ") + 1)}
        </Text>
    </View>
  )
}

