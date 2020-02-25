import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import List from '../modules/list/List';
import Landing from '../modules/landing/Landing';

const Stack = createStackNavigator();

function Router() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Landing} options={{ header: ({ scene, previous, navigation }) => null }} />
            <Stack.Screen name="List" component={List} options={{ headerBackTitleVisible: false }} />
        </Stack.Navigator>
    );
}

export default Router;
