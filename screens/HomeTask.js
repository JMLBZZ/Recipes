import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Text, View, TextInput, Button, TouchableOpacity, FlatList } from "react-native"

import {globalStyles} from "../styles/AppStyles"
import TodoItem from "./TodoItem";
import DateHeader from "./Date";
import Counter from "./Counter";
import ModalAddTask from "./ModalAddTask";
import { toggleTaskCompletion, removeTask } from "../redux/reducers/appReducer";


export default function HomeTask() {
    const tasks = useSelector((state) => state.users.taskList);
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => setModalVisible(!modalVisible);

    function toggleCompleted(id) {
        dispatch(toggleTaskCompletion(id));
    }

    
    function deleteTask(id) {
        dispatch(removeTask(id));
    }

        /*
        //Ajouter une task
        function addTask(text) {
            const newTask = { id: Date.now(), text, completed: false };
            setTasks([...tasks, newTask]);//ajoute la task avec le texte recu
        }
        // supprimer une task
        function deleteTask(id) {
            setTasks(tasks.filter(task => task.id !== id));
        }
        // tache faite
        function toggleCompleted(id) {
            setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
        }

        function toggleModal() {
            setModalVisible(!modalVisible);
        }
        */
        return (
        <View style={globalStyles.containerHomeTask}>
            <DateHeader/>
            <Counter tasks={tasks}/>

            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TodoItem
                        task={item}
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted}
                    />
                )}
            />

            <ModalAddTask
                visible={modalVisible}
                //onAddTask={addTask}
                onClose={toggleModal}
            />

            <TouchableOpacity style={globalStyles.fab} onPress={toggleModal}>
                <Text style={globalStyles.fabText}>+</Text>
            </TouchableOpacity>
        </View>
        );
    }
