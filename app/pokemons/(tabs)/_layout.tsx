import { Tabs } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CocktailsLayout() {

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
  }, []);
  
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{
          title: "Liste Pokémons",
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'list' : 'list-outline'} size={24} color={"#FF0000"}/>,
          tabBarActiveTintColor: '#FF0000',
        }}
      />
      <Tabs.Screen 
        name="random/index" 
        options={{
          title: "Pokémon Random",
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'dice' : 'dice-outline'} size={24} color={"#FF0000"}/>,
          tabBarActiveTintColor: '#FF0000',
        }}
      />
      <Tabs.Screen 
        name="fight-screen/index" 
        options={{
          title: "Pokémon Fight",
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'flame' : 'flame-outline'} size={24} color={"#FF0000"}/>,
          tabBarActiveTintColor: '#FF0000',
        }}
      />
      <Tabs.Screen 
        name="types" 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? 'flash' : 'flash-outline'} size={24} color={"#FF0000"}/>,
          tabBarActiveTintColor: '#FF0000',
        }}
      />
    </Tabs>
  )
}
