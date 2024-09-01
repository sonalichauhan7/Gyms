import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppScreens } from '../constants/app.screens';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={AppScreens.InitialStack}>
                <Stack.Screen name={AppScreens.InitialStack} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};