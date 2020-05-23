//Import React and Hook we needed
import React, { useState } from 'react';

//Import all required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';
import Loader from './Components/loader';

const RegisterScreen = props => {
  let [userName, setUserName] = useState('');
  let [userEmail, setUserEmail] = useState('');
  let [userAge, setUserAge] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');
  let [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

  const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userAge) {
      alert('Please fill Age');
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      user_name: userName,
      user_email: userEmail,
      user_age: userAge,
    };
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
    })
      .then(response => response.json())
      .then(responseJson => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status == 1) {
          setIsRegistraionSuccess(true);
          console.log('Registration Successful. Please Login to proceed');
        } else {
          setErrortext('Registration Unsuccessful');
        }
      })
      .catch(error => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../Image/success.png')}
          style={{ height: 150, resizeMode: 'contain', alignSelf: 'center' }}
        />
        <Text style={styles.successTextStyle}>Registration Successful.</Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <ImageBackground style={ styles.imgBackground }
    source={require('../Image/white-background2.jpg')}
    resizeMode='cover'
    > 
      <View style={{ flex: 1, }}>
        <Loader loading={loading} />
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={{ alignItems: 'center' }}>
            {/* <Image
              source={require('../Image/aboutreact.png')}
              style={{
                width: '50%',
                height: 100,
                resizeMode: 'contain',
                margin: 30,
              }}
            /> */}
            <Image source={require('../Image/fypo.png')} style={{ width: 350, height: 150 }} />
          </View>
          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserName => setUserName(UserName)}
                underlineColorAndroid="#000000"
                placeholder="Tu nombre aquí"
                placeholderTextColor="#000000"
                autoCapitalize="sentences"
                returnKeyType="next"
                onSubmitEditing={() =>
                  this._emailinput && this._emailinput.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserEmail => setUserEmail(UserEmail)}
                underlineColorAndroid="#000000"
                placeholder="Tu e-mail aquí"
                placeholderTextColor="#000000"
                keyboardType="email-address"
                // ref={ref => {
                //   this._emailinput = ref;
                // }}
                returnKeyType="next"
                onSubmitEditing={() => this._ageinput && this._ageinput.focus()}
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={UserAge => setUserAge(UserAge)}
                underlineColorAndroid="#000000"
                placeholder="Tu edad aquí"
                placeholderTextColor="#000000"
                keyboardType="numeric"
                // ref={ref => {
                //   this._ageinput = ref;
                // }}
                onSubmitEditing={() =>
                  this._addressinput && this._addressinput.focus()
                }
                blurOnSubmit={false}
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}> {errortext} </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitButton}>
              <Text style={styles.buttonTextStyle}>REGISTRO</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#c3f9f9',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#c3f9f9',
    height: 40,
    alignItems: 'center',
    borderRadius: 40,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#000000',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'black',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    marginTop: 50,
    flex: 1 
  },
  titleTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 110,
  },
});