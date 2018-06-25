import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class HomeComponent extends Component {
    static navigationOptions = {
        title:'Home',
    }
  render() {
      const { navigate } = this.props.navigation;
    return (
      <View>
        <Text> This is home </Text>
        <Button 
            title="See profile"
            onPress={ () => {navigate('Profile')} }
            />
      </View>
    );
  }
}

export default HomeComponent;
