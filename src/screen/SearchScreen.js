import React from 'react';
import { StyleSheet, View, Text } from "react-native";

const SearchScreen = () => {
    return ( 
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
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

export default SearchScreen;