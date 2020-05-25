import React from 'react';
import { StyleSheet, View, Text, Image } from "react-native";
import { Avatar, Divider } from 'react-native-elements';


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

// Dependencia axios
import axios from "axios";

export default class ProfileScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: []
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
          logo: {
            width: 66,
            height: 58,
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
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5}}>
          <Image
            style={styles.tinyLogo}
            source={{uri: item.photo_url}}
          />
        </View>
      )
    }

    render() {
        return (
            <View style={styles.container}>
                <MenuProvider style={{flexDirection: 'column', padding: 30}}>
                    <Menu onSelect={value => alert(`Selected number: ${value}`)}>
                    <Text h1 style={styles.text}>Fypers</Text>
                    <MenuTrigger>
                        <Avatar
                        size="xlarge"
                        rounded
                        source={{
                            uri:
                            'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                        showAccessory
                        containerStyle={{marginLeft: 'auto', marginRight: 'auto'}}
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

                    <Divider style={{ backgroundColor: 'black', marginTop: 35, height: 2 }} />
                    <Text h1 style={styles.textArmario}>Mi armario</Text>

                    <Carousel
                    layout={"stack"}
                    vertical={false}
                    sliderHeight={800}
                    firstItem={0}
                    ref={ref => this.carousel = ref}
                    data={this.state.outfitItems}
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
    text: {
      textAlign: 'center',
      marginTop: 20,
      padding: 10,
    },
    textArmario: {
      textAlign: 'center',
      marginTop: 30,
      padding: 10
    }
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

