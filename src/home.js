import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

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
            onPress={() => {Actions.profile()} }
            />
      </View>
    );
  }
}

export default HomeComponent;
