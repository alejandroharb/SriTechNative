import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection } from './common';
import NavBar from './common/NavBar';
import Icon from 'react-native-vector-icons/MaterialIcons';

let info = require('../assets/images/info.png');
let videos = require('../assets/images/videos.png');
let userstories = require('../assets/images/userstories.png');
let forum = require('../assets/images/forum.png');

// import Icon from 'react-native-vector-icons/MaterialIcons';
class TabView extends Component {
  constructor(){
    super();
  }
  render(){
    const { buttonTextStyle, buttonStyle, homeContainer, menuSection, textSection } = styles;

    return(
      <View style={homeContainer}>
        <Text>In hea</Text>

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
  },
  textSection: {
	  color: 'white',
	  fontWeight: '300',
	  backgroundColor: 'transparent',
	  fontSize: 25,
	  paddingLeft: 12,
	  paddingBottom: 6
  }
}

export default TabView;
