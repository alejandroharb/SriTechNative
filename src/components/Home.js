import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
  render(){
    return(
      <View>
        <Text>This is our Home Page</Text>
        <Button
          title="Camera"
          onPress={() => Actions.camera() }
          color="#1194f6"
        />
      </View>
    )
  }
}

export default Home;
