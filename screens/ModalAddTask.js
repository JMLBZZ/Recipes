import React, { useState } from "react";
import { Modal, View, TextInput, TouchableOpacity, Text } from "react-native";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/reducers/appReducer";
import {globalStyles} from "../styles/AppStyles"
import Colors from "../styles/Colors"



export default function ModalAddTask({ visible, onAddTask, onClose }) {
    const [taskText, setTaskText] = useState("");
    const [error, setError] = useState(false);
    const dispatch = useDispatch();


    function handleAddTask() {
        if (taskText.trim()) {
            //onAddTask(taskText);
            const newTask = { id: Date.now(), text: taskText, completed: false };
            dispatch(addTask(newTask));
            setTaskText("");
            setError(false);
            onClose();
        }else{
            setError(true);
        }
    }

    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
        >
            <View style={globalStyles.modalContainer}>
                <View style={globalStyles.modalContent}>
                    {error && (
                        <View style={globalStyles.errorContainer}>
                            <Text style={globalStyles.errorText}>Veuillez insérer une tâche !</Text>
                        </View>//affiche le message si champs vide et validé
                    )}
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Nouvelle tâche"
                        value={taskText}
                        onChangeText={text => {
                            setTaskText(text);
                            if (error) setError(false);//dès qu'on tape, ça enlève le message
                        }}                        placeholderTextColor={Colors.greylight}
                    />
                    <TouchableOpacity style={globalStyles.addButton} onPress={handleAddTask}>
                        <Text style={globalStyles.addButtonText}>Valider</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.cancelButton} onPress={onClose}>
                        <Text style={globalStyles.cancelButtonText}>Annuler</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}