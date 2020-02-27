import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';

export interface Props {
    navigation: any
}
export default class Login extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container} >
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('App', { screen: 'List' })
                }}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}