import React from 'react';
import { StyleSheet, View, Text } from "react-native";

const UploadScreen = () => {
    return ( 
        <View style={styles.container}>
            <Text>UploadScreen</Text>
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

export default UploadScreen;