import React, { Component } from 'react';
import { View, Text, Image, ImagePickerIOS } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Profile extends Component {
  constructor(){
    super();
  }

  render(){
    const { mainContainer, contentContainer } = styles;

    return(
      <View style={mainContainer}>
        <View style={imgContainer}>
        </View>

        <View style={contentContainer}>
        </View>
      </View>
    )
  }
}

const styles = {
  mainContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  imgContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4285f4'
  },
  contentContainer:{
    flex: 3,
    flexDirection: 'column',
  }
}

export default Profile;
