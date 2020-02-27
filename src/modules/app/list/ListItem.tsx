import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './Styles';

export interface dataObject {
    name: String,
    email: String
}

export interface Props {
    data: dataObject
}
function ListItem(props: Props) {
    //Hooks initializing data variable as props.data
    const [data, setData] = useState(props.data);
    return (
        <View style={styles.itemView}>
            <View style={styles.contentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../assets/avatar.png')} style={styles.avatar} />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.name}>
                        {data.name}
                    </Text>
                    <Text>
                        {data.email}
                    </Text>
                </View>
            </View>
        </View>
    )
};
export default ListItem;