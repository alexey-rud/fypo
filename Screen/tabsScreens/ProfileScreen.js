import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from 'react-native-elements';

const ProfileScreen = () => {
    return ( 
        <View style={styles.container}>
            <Text>María Pérez</Text>
            <Avatar
            size="xlarge"
            rounded
            source={{
                uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
            showAccessory
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});  

export default ProfileScreen;