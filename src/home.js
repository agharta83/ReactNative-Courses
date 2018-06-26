import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';


class HomeComponent extends Component {
  render() {
    return (
      <View>
        <Text> This is home </Text>
        <Button 
            title="See profile"
            onPress={Actions.drawer}
            />
      </View>
    );
  }
}

export default HomeComponent;
