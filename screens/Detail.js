import { View, ScrollView, Text, SafeAreaView, Image, FlatList, Pressable } from "react-native"
import React from "react"
import {globalStyles} from "../styles/AppStyles"
import { useDispatch } from "react-redux";
import { addTask } from "../redux/reducers/appReducer";



const Detail = ({route}) => {
    const { title, image, extendedIngredients, readyInMinutes } = route.params;
    const dispatch = useDispatch();


    const handleAddIngredient = (ingredient) => {
        const newTask = { id: Date.now(), text: ingredient.originalName, completed: false };
        dispatch(addTask(newTask)); 
    };

    return (
        <SafeAreaView style={globalStyles.detailContainer}>
            <Image
                source={{uri: image}}
                style={globalStyles.detailImg}
            />
            <View style={globalStyles.detailContentContainer}>
            <View style={globalStyles.detailTitleContainer}>
                <Text style={globalStyles.detailTitle}>{title}</Text>
                <Text style={globalStyles.detailReady}>Ready in {readyInMinutes} minutes</Text>
            </View>
            <View style={globalStyles.detailIngredientsContainer}>
            <Text style={globalStyles.detailIngredientsTitle}>Ingrédients :</Text>
            <FlatList
                data={extendedIngredients}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={globalStyles.detailIngredientItem}>
                        <Text style={globalStyles.detailIngredientText}>{item.originalName}</Text>
                        <Pressable 
                            style={({ pressed }) => [
                                globalStyles.detailButtonAdd,
                                pressed && { opacity: 0.6 }
                            ]}
                            onPress={() => handleAddIngredient(item)
                            //{
                                //faire l"ajout vers la shoplist comme le précédent tp
                                //console.log("Clic AJOUTER")
                            //}
                            }
                        >
                            <Text style={globalStyles.detailButtonAddText}>Ajouter</Text>
                        </Pressable>
                    </View>
                )}
            />
            </View>
            </View>
        </SafeAreaView>
    )
}

export default Detail