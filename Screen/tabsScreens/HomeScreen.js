//Import React
import React from 'react';

//Import all required component
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, FlatList, Linking } from 'react-native';
import Constants from 'expo-constants';

// Dependencia UI
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements'

// Dependencia carousel
import Carousel from 'react-native-snap-carousel';

// Dependencia axios
import axios from "axios";

export default class HomeScreen extends React.Component {
 
  constructor(props){
      super(props);
      this.state = {
        activeIndex:0,
        outfitItems: []
      }
  }    
  
  componentDidMount() {
    try {
      axios
      .get("http://34.225.64.4:8000/api/outfits/")
      .then(response => {
        const outfits = response.data.data;
        this.setState({
          outfitItems: outfits
        })
      })
    .catch(function(error) {
      console.log(error);
    });
    } catch (error) {
      console.log(err);
    }
    };

  _renderItem({item,index}){
      const styles = StyleSheet.create({
        container: {
          paddingTop: 50,
        },
        tinyLogo: {
          width: 300,
          height: 300,
        },
      });
    
      return (
        <View style={{
            backgroundColor: '',
            borderRadius: 5,
            height: 300,
            width: 300,
            marginLeft: 25,
            marginRight: 25, 
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5}}>
          <ImageBackground
              style={{
              height: 300,
              width: 300,
              position: 'relative',
              top: 2,
              left: 2,
              }}
              source={{uri: item.photo_url}}
          >
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  backgroundColor: 'white',
                  opacity: 0.7,
                  position: 'absolute',
                  bottom: 250,
                  left: 10,
                  padding: 10,
                  borderRadius: 5
                }}
                onPress={() => Linking.openURL(item.url_tienda)}>
              #{item.body_type}</Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  backgroundColor: 'white',
                  opacity: 0.7,
                  position: 'absolute',
                  bottom: 35,
                  left: 100,
                  padding: 10,
                  borderRadius: 5
                }}
                onPress={() => Linking.openURL(item.url_tienda)}>
              Ver en tienda</Text>
          </ImageBackground>
        </View>
      )
  }

  render() {
      return (
        <SafeAreaView style={{flex: 1, backgroundColor:'white' }}>
          <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
              <Carousel
                layout={"default"}
                vertical={true}
                autoplay={true}
                sliderHeight={800}
                itemHeight={300}
                firstItem={0}
                ref={ref => this.carousel = ref}
                data={this.state.outfitItems}
                sliderWidth={300}
                itemWidth={300}
                renderItem={this._renderItem}
                onSnapToItem = { index => this.setState({activeIndex:index}) } />
          </View>
        </SafeAreaView>
        
      );
  }
}