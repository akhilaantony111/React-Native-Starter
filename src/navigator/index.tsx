import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthLoading from '../modules/auth/loading';
import { AuthStack } from './auth_stack';
import { AppStack } from './app_stack';

const Stack = createStackNavigator();

class Router extends React.Component {
    render() {
        return (
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Loading" component={AuthLoading} />
                <Stack.Screen name="Auth" component={AuthStack} />
                <Stack.Screen name="App" component={AppStack} />
            </Stack.Navigator>
        );
    }
}
export default Router;
