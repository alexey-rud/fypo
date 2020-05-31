import React from "react";
import { Button, Image, View, StyleSheet, Text, Picker, TextInput, SafeAreaView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

// Dependencia axios
import axios from "axios";

// Dependencias Input e Iconos
import { Avatar, Divider, Input, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
    checked: false,
    selectedValue: 'triangle',
    value: '',
    url_tienda: '',
    photo_url: ''
  };

  subirImagen() {
    axios.post('http://34.225.64.4:8000/api/outfits', {
      url_tienda: this.state.url_tienda,
      body_type: this.state.selectedValue,
      photo_url: this.state.photo_url,
      id_usuario: '5ecc5736f35105128ef1fdb1'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    let { image } = this.state;

    return (
      <SafeAreaView style={{flex: 1, backgroundColor:'white' }}>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Link a la tienda:</Text>
      <TextInput
      style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => this.setState({url_tienda: text})}
      value={this.state.url_tienda}
      />
      <Divider style={{ backgroundColor: 'black', marginTop: 35, height: 2 }} />

      <Text>Escoge tu tipo de cuerpo:</Text>
      <Picker
        selectedValue={this.state.selectedValue}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => this.setState({selectedValue: itemValue})}
      >
        <Picker.Item label="Triángulo" value="triangle" />
        <Picker.Item label="Triángulo invertido" value="triangle_inv" />
        <Picker.Item label="Rectángulo" value="rectangle" />
        <Picker.Item label="Reloj de arena" value="hourglass" />
        <Picker.Item label="Manzana" value="apple" />
      </Picker>

      <Text>Link a la foto:</Text>
      <TextInput
      style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => this.setState({photo_url: text})}
      value={this.state.photo_url}
      />
      <Divider style={{ backgroundColor: 'black', marginTop: 35, height: 2 }} />

      <Text>O sube una foto con tu móvil:</Text>
      <Divider style={{ backgroundColor: 'black', marginTop: 5, height: 2 }} />
      
      <Button title="SUBIR OUTFIT DESDE LA GALERÍA" onPress={this._pickImage} />

      <Divider style={{ backgroundColor: 'black', marginTop: 15, height: 2 }} />
      
      <Button title="SUBIR OUTFIT DESDE LA CÁMARA" onPress={this._pickImageCamera} />

      <Divider style={{ backgroundColor: 'black', marginTop: 35, height: 2 }} />

      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 5 }} />}

      <Button
          title="Subir"
          enabled
          onPress={() => this.subirImagen()}
        />
      </View>
      </SafeAreaView>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
    ImagePicker.requestCameraRollPermissionsAsync();
    ImagePicker.requestCameraPermissionsAsync();
}

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('¡Necesitamos tu permiso!');
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  _pickImageCamera = async () => {
    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
}

const styles = StyleSheet.create({
    text: {
      textAlign: 'center',
      padding: 10,
    }
}); 