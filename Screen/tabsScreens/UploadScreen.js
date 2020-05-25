import * as React from 'react';
import { Button, Image, View, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { Avatar, Divider } from 'react-native-elements';

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="SUBIR OUTFIT DESDE LA GALERÍA" onPress={this._pickImage} />

        <Divider style={{ backgroundColor: 'black', marginTop: 35, height: 2 }} />
        
        <Button title="SUBIR OUTFIT DESDE LA CÁMARA" onPress={this._pickImageCamera} />

        <Divider style={{ backgroundColor: 'black', marginTop: 35, height: 2 }} />


        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 5 }} />}
      </View>
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