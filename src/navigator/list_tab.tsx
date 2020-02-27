import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import List from '../modules/app/list/List';

const Tab = createMaterialTopTabNavigator();

export function ListTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Margarita" component={List} />
            <Tab.Screen name="Shots" component={List} />
        </Tab.Navigator>
    );
}