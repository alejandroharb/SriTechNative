import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection } from './common';
import NavBar from './common/NavBar';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import Icon from 'react-native-vector-icons/MaterialIcons';
class Home extends Component {
  constructor(){
    super();
  }
  render(){
    const { buttonTextStyle, buttonStyle, homeContainer, menuSection } = styles;

    return(
      <View style={homeContainer}>
        <View style={menuSection}>
        </View>
        <NavBar />
      </View>
    )
  }
}

const styles = {
  homeContainer: {
    flex:1,
    flexDirection:'column',
    alignItems: 'stretch',
    justifyContent: 'flex-end'
  },
  menuSection: {
    flex: 8
  },
  tempText: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTextStyle: {
    color:'#FAFAFA'
  },
  buttonStyle: {
    backgroundColor: '#4285f4'
  }
}

export default Home;
