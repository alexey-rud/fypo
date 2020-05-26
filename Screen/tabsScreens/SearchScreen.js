import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, Animated, Linking } from "react-native";
import { Avatar, Divider, Button, ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// Dependencia carousel
import Carousel from 'react-native-snap-carousel';

// Dependencia axios
import axios from "axios";

class ImageLoader extends Component {
  state = {
    opacity: new Animated.Value(0),
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  render() {
    return (
      <Animated.Image
        onLoad={this.onLoad}
        {...this.props}
        style={[
          {
            opacity: this.state.opacity,
            transform: [
              {
                scale: this.state.opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                })
              }
          ]
        },
        this.props.style,
        ]}
      />
    )
  }
}

export default class ProfileScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          activeUserIndex: 0,
          selectedIndex: 2,
          outfitItems: [],
          userItems: []
      }
      this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex (selectedIndex) {
      this.setState({selectedIndex})

      try {
        axios
        .get("http://34.225.64.4:8000/api/outfits/")
        .then(response => {
          const outfits = [];  

          switch(this.state.selectedIndex) {
            case 0:
              for (let index = 0; index < response.data.data.length; index++) {
                if(response.data.data[index].body_type == 'triangle' || response.data.data[index].body_type == 'pear')  {
                  outfits.push(response.data.data[index])
                }
              }
              
              this.setState({
                outfitItems: outfits
              })

              console.log(outfits)
              break;
            case 1:
              for (let index = 0; index < response.data.data.length; index++) {
                if(response.data.data[index].body_type == 'inverted_triangle')  {
                  outfits.push(response.data.data[index])
                }
              }
              
              this.setState({
                outfitItems: outfits
              })
              break;
            case 2:
              for (let index = 0; index < response.data.data.length; index++) {
                if(response.data.data[index].body_type == 'rectangle')  {
                  outfits.push(response.data.data[index])
                }
              }
              
              this.setState({
                outfitItems: outfits
              })
              break;
            case 3:
              for (let index = 0; index < response.data.data.length; index++) {
                if(response.data.data[index].body_type == 'hourglass')  {
                  outfits.push(response.data.data[index])
                }
              }
              
              this.setState({
                outfitItems: outfits
              })
              break;
            case 4:
              for (let index = 0; index < response.data.data.length; index++) {
                if(response.data.data[index].body_type == 'apple')  {
                  outfits.push(response.data.data[index])
                }
              }
              
              this.setState({
                outfitItems: outfits
              })
              break;
          }
        })  
        .catch(function(error) {
          console.log(error);
        });
        } catch (error) {
          console.log(err);
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

      try {
        axios
        .get("http://34.225.64.4:8000/api/users/")
        .then(response => {
          const users = response.data.data;
          this.setState({
            userItems: users
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
            width: 250,
            height: 250,
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
            height: 250,
            width: 250,
            marginLeft: 25,
            marginRight: 25, 
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5}}>
          <ImageBackground
              style={{
              height: 250,
              width: 250,
              position: 'relative',
              top: 2,
              left: 2,
              }}
              source={{uri: item.photo_url}}
          >
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'white',
                  backgroundColor: 'white',
                  opacity: 0.7,
                  position: 'absolute',
                  bottom: 35,
                  left: 50,
                  padding: 10,
                  borderRadius: 5
                }}
                onPress={() => Linking.openURL(item.url_tienda)}>
              Comprar outfit</Text>
          </ImageBackground>
        </View>
      )
    }

    _renderUserItem({item,index}){
      const styles = StyleSheet.create({
        container: {
          paddingTop: 50,
        },
        tinyLogo: {
          width: 250,
          height: 250,
          borderRadius: 10
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
          height: 250,
          width: 250,
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
          source={{uri: item.url_foto}}
        />
      </View>
    )
  }

    render() {
        const buttons = ['Triángulo', 'Triángulo invertido', 'Rectángulo', 'Reloj de arena', 'Manzana']
        const { selectedIndex } = this.state

        return (
            <View style={styles.container}>
                    <Text h1 style={styles.text}>Hot Fypers</Text>

                    <Carousel
                    layout={"default"}
                    vertical={false}
                    sliderHeight={250}
                    firstItem={0}
                    ref={ref => this.carousel = ref}
                    data={this.state.userItems}
                    sliderWidth={800}
                    itemWidth={250}
                    renderItem={this._renderUserItem}
                    onSnapToItem = { index => this.setState({activeUserIndex:index}) } />

                    <Divider style={{ backgroundColor: 'black', marginTop: 15, height: 2 }} />
                    <Text h1 style={styles.textArmario}>Búsqueda</Text>

                    <ButtonGroup
                      onPress={this.updateIndex}
                      selectedIndex={selectedIndex}
                      buttons={buttons}
                      containerStyle={{height: 40, margin: 5}}
                    />

                    <Carousel
                    layout={"default"}
                    vertical={false}
                    sliderHeight={800}
                    firstItem={0}
                    ref={ref => this.carousel = ref}
                    data={this.state.outfitItems}
                    sliderWidth={800}
                    itemWidth={250}
                    renderItem={this._renderItem}
                    onSnapToItem = { index => this.setState({activeIndex:index}) } />
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
      marginTop: 0,
      padding: 10
    }
});  
