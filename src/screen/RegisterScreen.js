import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  navigation
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { CheckBox } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
import { Button } from "react-native-paper";

export default class ActionSignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            checked:true
        }
    }

  render(){
    return(
      <Animatable.View 
      animation="bounceInRight"
      style={styles.container}>
          <View style={styles.section}>
                <View style={styles.icon}>
                    <MaterialIcons 
                        name="email"
                        color="gray"
                        size={20}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput 
                        placeholder="Your email..."
                        style={styles.textInput}
                    />
                </View>
          </View>

          <View style={[styles.section,{
              marginTop:15
          }]}>
                <View style={styles.icon}>
                    <MaterialIcons 
                        name="lock"
                        color="gray"
                        size={20}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput 
                        secureTextEntry
                        placeholder="Your password..."
                        style={styles.textInput}
                    />
                </View>
          </View>

          <View style={styles.bottom}>
                <View style={styles.button_container}>
                        <View style={styles.button}>
                                <Text style={styles.text}>Sign Up</Text>
                        </View>
                </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.button_container}>
                <Text style={styles.tryIt}>Try it without registering</Text>
                <Button
                    title = "StartForm"
                    onPress = {()=> navigation.navigate('NoseScreen')
                    } 
                />
            </View>
          </View>
      </Animatable.View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:30
  },
  section:{
      flexDirection:'row',
      backgroundColor:'white',
      width:'100%',
      paddingVertical:15,
      paddingHorizontal:10,
      borderRadius:7
  },
  icon: {
      borderRightWidth:1,
      borderRightColor:'gray',
      paddingRight:10
  },
  input: {
      flex:1
  },
  textInput: {
      paddingLeft:10
  },
  bottom: {
      flexDirection:'row',
      marginTop:10
  },
  button_container: {
      flex:1,
      alignItems:'center'
  },
  button: {
      width:100,
      height:40,
      backgroundColor:'#EC6848',
      borderWidth:1,
      borderColor:'white',
      borderRadius:7,
      marginTop:10,
      justifyContent:'center',
      alignItems:'center'
  },
  text: {
    color:'white',
    fontWeight:'bold',
    fontSize:18
  },
  tryIt: {
    color:'gray',
    fontWeight:'400',
    fontSize:14
  }
})