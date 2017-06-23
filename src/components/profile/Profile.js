import React, { Component } from 'react';
import { View, Text, Image, ImagePickerIOS } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Profile extends Component {
  constructor(){
    super();
  }

  render(){
    const { mainContainer, contentContainer, topContainer, image } = styles;

    return(
      <View style={mainContainer}>
        <View style={topContainer}>
          <Icon name="person" size={90} color="#dcdcdc" style={image}/>
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
  topContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4285f4'
  },
  contentContainer:{
    flex: 3,
    flexDirection: 'column',
  },
  image: {
    backgroundColor: '#FAFAFA',
    elevation:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 5
  }
}

export default Profile;
