import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import App from '../../App'
import GameListScreen from '../screens/GameListScreen';
import AddGameScreen from '../screens/AddGameScreen';
import GameDetailScreen from '../screens/GameDetailScreen'
import GamingNewsScreen from '../screens/GamingNewsScreen';

const Stack = createNativeStackNavigator();

//This part is responsible for creating the navigators to move from one screen to another.
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="GameList" component={GameListScreen} />
        <Stack.Screen name="AddGame" component={AddGameScreen} />
        <Stack.Screen name="GameDetail" component={GameDetailScreen}/>
        <Stack.Screen name ="GamingNews" component={GamingNewsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}