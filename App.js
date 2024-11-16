import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from 'react-redux'

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";

import { NavigationContainer } from "@react-navigation/native";

import { globalStyles } from "./styles/AppStyles";
import Colors from "./styles/Colors";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import Profil from "./screens/Profil";
import TaskList from "./screens/TaskList";

import store from "./redux/store";


export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  // Stack pour Home :
  const HomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ 
          headerShown: true ,
          title: "Accueil"
        }} 
      />
      <Stack.Screen 
        name="Detail" 
        component={Detail} 
        options={{ 
          headerShown: true, 
          title: "Détail de la recette" 
        }} 
      />
    </Stack.Navigator>
  );

  // Stack pour Liste :
  const TaskListStack = () => (
    <Stack.Navigator>
      <Stack.Screen 
        name="TaskList" 
        component={TaskList} 
        options={{ 
          headerShown: false ,
          title: "Liste des courses"
        }} 
      />
    </Stack.Navigator>
  );

  // Stack pour Profil
  const ProfilStack = () => (
    <Stack.Navigator>
      <Stack.Screen 
        name="Profil" 
        component={Profil} 
        options={{ headerShown: true }} 
      />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <Provider store={store}>

      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: Colors.greyLightPlus },
        }}
      >
        <Tab.Screen 
          name="HomeTab" 
          component={HomeStack} 
          options={{ 
            tabBarLabel: "Accueil",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="TaskListTab" 
          component={TaskListStack} 
          options={{ 
            tabBarLabel: "Liste",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="shopping-cart" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="ProfilTab" 
          component={ProfilStack} 
          options={{ 
            tabBarLabel: "Profil",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="diversity-3" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
