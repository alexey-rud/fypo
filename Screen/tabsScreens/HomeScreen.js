//Import React
import React from 'react';

//Import all required component
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, FlatList } from 'react-native';
import Constants from 'expo-constants';

// Dependencia UI
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements'

const HomeScreen = () => {
  global.currentScreenIndex = 'HomeScreen';
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../Image/white-background.jpg')} style={styles.image}>
         {/* Aquí irá el nombre del armario que el user haya puesto*/}
        <Card
          title='CAJÓN DE SASTRE'
          image={require('../../Image/chaqueta.jpg')}>
          {/*Descripción de la prenda*/}
          <Text style={{marginBottom: 10}}>
            Una chaqueta de cuero heavy.
          </Text>
          <Button
            icon={<Icon name='star' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 5}}
            title='' />

          <Button
            icon={<Icon name='shop' color='#ffffff' />}
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='' />
        </Card>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
  },
});

export default HomeScreen;