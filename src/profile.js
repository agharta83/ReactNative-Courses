import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { ImagePicker, Camera, Permissions  } from 'expo';

class ProfileComponent extends Component {
  state = {
    avatar: null,
  }

  /**
   * * Permissions to access camera and gallery
   */
  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
  }

  /**
   * * Choose a picture from the gallery
   */
  _addAvatar = async () => {
    await this.askPermissionsAsync();

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      MediaTypeOptions: 'Images',
      aspect: [4, 3],
      base64: true, // Encoding format picture
    });

    // * Manage errors and setState
    if (!result.cancelled) {
      this.setState({ avatar: result.uri });
    } else if (result.error) {
        alert('Sorry, not working !');
    } else {
        alert('Cancel op');
    }
  };

  /**
   * * Choose a picture from the camera
   */
  _takeAvatar = async () => {
    await this.askPermissionsAsync();

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      base64: true, // Encoding format picture
    });

    // * Manage errors and setState
    if(!result.cancelled) {
      this.setState({ avatar: result.uri });
    } else if (result.error) {
        alert('Sorry, not working !');
    } else {
        alert('Cancel op');
    }
  };

  render() {
    let { avatar } = this.state;

    return (
      <View style={{ width: '100%' }}>
        { avatar && 
          <Image
            source={{ uri:this.state.avatar}}
            style={styles.avatar}
          />
        }
          
        <Button title='Add your avatar into your library' onPress={this._addAvatar} />
        <Button title='Take a photo' onPress={this._takeAvatar} />

      </View>
    );
  }   
}


const styles = StyleSheet.create({
  avatar: {
    width: '100%',
    height: 400,
  },
});

export default ProfileComponent;
