//Import React
import React from 'react';

//Import all required component
import { View, Text, StyleSheet, ImageBackground, SafeAreaView, FlatList } from 'react-native';
import Constants from 'expo-constants';

// Dependencia UI
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements'

// Dependencia carousel
import Carousel from 'react-native-snap-carousel';

export default class HomeScreen extends React.Component {
 
  constructor(props){
      super(props);
      this.state = {
        activeIndex:0,
        carouselItems: [
        {
            title:"Item 1",
            text: "Text 1",
        },
        {
            title:"Item 2",
            text: "Text 2",
        },
        {
            title:"Item 3",
            text: "Text 3",
        },
        {
            title:"Item 4",
            text: "Text 4",
        },
        {
            title:"Item 5",
            text: "Text 5",
        },
      ]
    }
  }

  _renderItem({item,index}){
      const styles = StyleSheet.create({
        container: {
          paddingTop: 50,
        },
        tinyLogo: {
          width: 100,
          height: 100,
        },
        logo: {
          width: 66,
          height: 58,
        },
      });
    
      return (
        <View style={{
            backgroundColor: 'lightblue',
            borderRadius: 5,
            height: 250,
            padding: 50,
            marginLeft: 25,
            marginRight: 25, }}>
          <Text style={{fontSize: 30}}>{item.title}</Text>
          <Text>{item.text}</Text>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
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
                sliderHeight={800}
                itemHeight={300}
                firstItem={1}
                ref={ref => this.carousel = ref}
                data={this.state.carouselItems}
                sliderWidth={300}
                itemWidth={300}
                renderItem={this._renderItem}
                onSnapToItem = { index => this.setState({activeIndex:index}) } />
          </View>
        </SafeAreaView>
      );
  }
}