import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../modules/auth/login/Login';

const AuthStackNav = createStackNavigator();

export function AuthStack() {
    return (
        <AuthStackNav.Navigator headerMode="none">
            <AuthStackNav.Screen name="Login" component={Login} />
        </AuthStackNav.Navigator>
    )
}