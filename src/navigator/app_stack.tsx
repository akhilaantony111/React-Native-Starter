import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ListTabs } from './list_tab';

const AppStackNav = createStackNavigator();

export function AppStack() {
    return (
        <AppStackNav.Navigator>
            <AppStackNav.Screen name="List" component={ListTabs} options={{ headerBackTitleVisible: false }} />
        </AppStackNav.Navigator>
    )
}