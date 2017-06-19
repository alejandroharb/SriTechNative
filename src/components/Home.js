import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection } from './common';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import Icon from 'react-native-vector-icons/MaterialIcons';
class Home extends Component {
  constructor(){
    super();
  }
  render(){
    return(
      <View style={styles.homeContainer}>
        <Text style={styles.tempText}> Home Page</Text>
        <Button onPress={() => Actions.visualization()}>
          <Icon name="photo-camera" size={40} color={'#dcdcdc'}/>
        </Button>
      </View>
    )
  }
}

const styles = {
  homeContainer: {
    flex:1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  tempText: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export default Home;
