import React from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar, ImageBackground, Image, TouchableOpacity } from 'react-native';
// import Navigator from './src/navigation/Navigator';

import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      enable: true
    }
  }

  tab(value){
    if(value=="SignIn"){
      this.setState({
        enable:true
      })
    }
    else{
      this.setState({
        enable:false
      })
    }
  }

  render(){
    return(
      <View style={styles.container}>
          <StatusBar hidden={true} />
          <View style={styles.header}>
              <View style={styles.logo}>
                  <ImageBackground 
                    source={require("../../assets/logo.png")}
                    style={{width:'100%', height:'100%'}}
                    resizeMode={"stretch"}
                  />
              </View>
              <View style={styles.tabbar}>
                  <View style={styles.box}>
                      <TouchableOpacity
                      onPress={()=>this.tab("SignIn")}
                      style={[styles.item,{
                        backgroundColor: this.state.enable ? '#EC6848' : 'white',
                        borderTopLeftRadius:width/2/2,
                        borderBottomLeftRadius:width/2/2
                      }]}>
                          <FontAwesome 
                            name="sign-in"
                            size={30}
                            color={this.state.enable ? "white" : "black"}
                          />
                      </TouchableOpacity>

                      <TouchableOpacity
                      onPress={()=>this.tab("SignUp")}
                      style={[styles.item,{
                        backgroundColor: this.state.enable ? 'white' : '#EC6848',
                        borderTopRightRadius:width/2/2,
                        borderBottomRightRadius:width/2/2
                      }]}>
                          <FontAwesome 
                            name="registered"
                            size={30}
                            color={this.state.enable ? "black" : "white"}
                          />
                      </TouchableOpacity>
                  </View>
              </View>
          </View>

          {this.state.enable ?
          <LoginScreen />
          :
          <RegisterScreen />}
      </View>
    )
  }
}

const width = Dimensions.get("screen").width;

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#56310b'
  },
  header: {
    flex:1.5,
    paddingHorizontal:20
  },
  logo: {
    flex:1,
    width:'100%',
    height:'100%',
    shadowColor: "#000",
    shadowOffset: {
      width:0,
      height:2,
    },
    shadowOpacity : 1,
    shadowRadius:2.62,
    elevation:4,
    borderBottomLeftRadius:200,
    borderBottomRightRadius:200
  },
  tabbar: {
    position:'absolute',
    bottom:0,
    width:width,
    height:40,
    justifyContent:'center',
    alignItems:'center'
  },
  box: {
    width:width/2,
    height:70,
    borderRadius: width/2/2,
    elevation:10,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#f2f2f2',
    shadowColor:"#000",
    shadowOffset: {
      width:0,
      height:2
    },
    shadowOpacity:0.7,
    shadowRadius:2.62,
    flexDirection:'row'
  },
  item: {
    width: width/2/2,
    height:70,
    justifyContent:'center',
    alignItems:'center'
  }
})
