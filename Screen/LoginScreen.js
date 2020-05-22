//Import React and Hook we needed
import React, { useState } from 'react';

//Import all required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import { AsyncStorage } from 'react-native';
import Loader from './Components/loader';

const LoginScreen = props => {
  let [userEmail, setUserEmail] = useState('');
  let [userPassword, setUserPassword] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    var dataToSend = { user_email: userEmail, user_password: userPassword };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    }).then(response => response.json())
      .then(responseJson => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status == 1) {
          AsyncStorage.setItem('user_id', responseJson.data[0].user_id);
          console.log(responseJson.data[0].user_id);
          props.navigation.navigate('DrawerNavigationRoutes');
        } else {
          setErrortext('Please check your email id or password');
          console.log('Please check your email id or password');
        }
      })
      .catch(error => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <ImageBackground style={ styles.imgBackground }
    source={require('../Image/white-wood-texture-background.png')}
    resizeMode='cover'
    > 
      <View style={styles.mainBody}>
        <Loader loading={loading} />
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={{ marginTop: 50 }}>
            <KeyboardAvoidingView enabled>
              <View style={{ alignItems: 'center' }}>
                {/* <Image
                  source={require('../Image/armario_small.png')}
                  style={{
                    width: '100%',
                    height: 200,
                    resizeMode: 'contain',
                    marginLeft: 14,
                    marginVertical: 20, 
                  }}
                /> */}
                <Text style={styles.titleTextStyle}>
                  F Y P O
                </Text>
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={UserEmail => setUserEmail(UserEmail)}
                  underlineColorAndroid="#000000"
                  placeholder="Enter Email" //dummy@abc.com
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  // ref={ref => {
                  //   this._emailinput =a18paucaltov@inspedralbes.cat;
                  // }}
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    this._passwordinput && this._passwordinput.focus()
                  }
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={UserPassword => setUserPassword(UserPassword)}
                  underlineColorAndroid="#000000"
                  placeholder="Enter Password" //12345
                  placeholderTextColor="#000000"
                  keyboardType="default"
                  // ref={ref => {
                  //   this._passwordinput = ref;
                  // }}
                  onSubmitEditing={Keyboard.dismiss}
                  blurOnSubmit={false}
                  secureTextEntry={true}
                />
              </View>
              {errortext != '' ? (
                <Text style={styles.errorTextStyle}> {errortext} </Text>
              ) : null}
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={handleSubmitPress}>
                <Text style={styles.buttonTextStyle}>LOGIN</Text>
              </TouchableOpacity>
              <Text
                style={styles.registerTextStyle}
                onPress={() => props.navigation.navigate('RegisterScreen')}>
                New Here ? Register
              </Text>
              <Text
                style={styles.tryTextStyle}
                onPress={() => props.navigation.navigate('HomeScreen')}>
                Test first before registering 
              </Text>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#f0fbfb',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 30,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    // backgroundColor: '#b4ebee',
    borderWidth: 5,
    color: '#000000',
    borderColor: '#000000',
    height: 50,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 40,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#000000',
    paddingVertical: 0,
    fontWeight: 'bold',
    fontSize: 30,
  },
  inputStyle: {
    flex: 1,
    color: '#000000',
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: '#000000',
  },
  registerTextStyle: {
    color: '#000000',
    paddingTop: 130,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
},
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  titleTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: 110,
  },
  tryTextStyle: {
    color: 'black',
    paddingTop: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
});