import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './containers/Home';
import ClientsScreen from './containers/Clients';
import AnimationScreen from './containers/Animation';
import NewClientScreen from './containers/NewClient';
import { useNavigation } from '@react-navigation/core';

const Stack = createStackNavigator();

const Routes = [
     {
         name: 'Home',
         title: 'Home',
         component: HomeScreen
     },
     {
         name: 'Clients',
         title: 'Client List',
         component: ClientsScreen
     },
     {
         name: 'Animation',
         title: 'Animated Box',
         component: AnimationScreen
     },
     {
         name: 'New Client',
         title: 'Add Client',
         component: NewClientScreen
     }
];

const NavigationStack = () => {

    const dynamicRoutes = Routes.map(route => <Stack.Screen name={route.name} component={route.component} /> );

    return (
        <Stack.Navigator>
            {dynamicRoutes}
        </Stack.Navigator>
    )
}

export { NavigationStack , Routes };