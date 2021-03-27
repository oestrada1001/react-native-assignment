import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './containers/Home';
import ClientsScreen from './containers/Clients';
import AnimationScreen from './containers/Animation';
import NewClientScreen from './containers/NewClient';

const Stack = createStackNavigator();

const NavigationStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Clients" component={ClientsScreen} />
            <Stack.Screen name="Animation" component={AnimationScreen} />
            <Stack.Screen name="New Client" component={NewClientScreen} />
        </Stack.Navigator>
    )
}

export default NavigationStack;