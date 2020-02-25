import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';

export default function Landing({ navigation }: { navigation: any }) {
    navigation.setOptions({
        headerMode: "none"
    })
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("List")} style={styles.button}>
                <Text style={styles.buttonText}>Go to users list</Text>
            </TouchableOpacity>
        </View>
    );
}