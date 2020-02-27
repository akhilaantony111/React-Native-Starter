import * as React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from 'react-native-splash-screen';

export interface Props {
    navigation: any
}
export default class AuthLoading extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.checkAuth();
    }

    checkAuth = async () => {
        const authToken = await AsyncStorage.getItem('authToken');
        SplashScreen.hide();
        this.props.navigation.navigate(authToken ? 'App' : 'Auth');
    };
    render() {
        return (
            null
        )
    }
}