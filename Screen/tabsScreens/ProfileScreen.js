import React from 'react';
import { StyleSheet, View, Text, Image } from "react-native";
import { Avatar } from 'react-native-elements';

// Dependencia menú táctil
import { MenuProvider } from 'react-native-popup-menu';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

// Dependencia carousel
import Carousel from 'react-native-snap-carousel';

export default class ProfileScreen extends React.Component {
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
            <View style={styles.container}>
                <MenuProvider style={{flexDirection: 'column', padding: 30}}>
                    <Menu onSelect={value => alert(`Selected number: ${value}`)}>
                    <MenuTrigger>
                        <Avatar
                        size="xlarge"
                        rounded
                        source={{
                            uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                        showAccessory
                        containerStyle={{marginTop: 100, marginLeft: 'auto', marginRight: 'auto'}}
                        />
                    </MenuTrigger>
                    <MenuOptions customStyles={optionsStyles}>
                        <MenuOption value={1} text='One' />
                        <MenuOption value={2}>
                        <Text style={{color: 'red'}}>Two</Text>
                        </MenuOption>
                        <MenuOption value={3} disabled={true} text='Three' />
                    </MenuOptions>
                    </Menu>
                    <Carousel
                    layout={"default"}
                    vertical={false}
                    marginTop={100}
                    sliderHeight={800}
                    firstItem={0}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}
                    sliderWidth={300}
                    itemWidth={300}
                    renderItem={this._renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) } />
                </MenuProvider>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});  

const optionsStyles = {
    optionsContainer: {
      backgroundColor: 'lightblue',
      padding: 5,
      marginLeft: 50,
      marginRight: 50,
      marginTop: 20
    },
    optionsWrapper: {
      backgroundColor: 'lightblue',
    },
    optionWrapper: {
      backgroundColor: 'white',
      margin: 5,
    },
    optionTouchable: {
      underlayColor: 'gold',
      activeOpacity: 70,
    },
    optionText: {
      color: 'brown',
    },
  };

