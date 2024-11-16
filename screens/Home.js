import React, { useState, useEffect } from "react"
import { View, Text, SafeAreaView, Pressable, FlatList, Image } from "react-native"
import axios from "axios"
import {globalStyles} from "../styles/AppStyles"
import {recipeData} from "../datas/Recipes"



const Home = ({navigation}) => {

    const [recipes, setRecipes] = useState(recipeData);  // State pour stocker les recettes

    const apiKey = "XXXXX";

    const fetchRecipes = async () => {//fonction asynchrone
        try {//try & catch : gère les erreurs
            const response = await axios.get(
                `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=20&addRecipeInformation=true`
            );
            console.log("RECETTE ========>", JSON.stringify(response.data.recipes[0], null, 2));

            //affichage par ordre alphabétique du titre
            const sortedRecipes = response.data.recipes.sort((a, b) => 
                a.title.localeCompare(b.title)
            );

            setRecipes(sortedRecipes); //set les données de l"api
        } catch (error) {
            console.error("Erreur lors de la récupération des recettes : ", error);
        }
    };

    useEffect(() => {
        fetchRecipes();  //j"appel l"api au chargement du composant
    }, []);




    const renderList = ({item}) => {
        return(
            <Pressable 
                onPress={()=> navigation.navigate("Detail",item)}
                style={globalStyles.listContainer}
            >
                <Image
                    source={{uri: item.image}}
                    style={globalStyles.listImg}
                />
                <Text style={globalStyles.listTitle}>{item.title}</Text>
            </Pressable>
        )
    }

    return (
        <SafeAreaView style={globalStyles.container}>
            <FlatList
                data={recipes}
                renderItem={renderList}
                keyExtractor={(item)=>item.id.toString()}
                //keyExtractor={(item)=>item.id}
            />
            
        </SafeAreaView>
    )
}

export default Home