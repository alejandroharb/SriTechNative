import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection } from './common';
import Login from './auth/Login';

class Landing extends Component {
  render(){
    const { mainContainer, imgContainer } = styles;
    return(
      <ScrollView>
        <View style={ mainContainer }>

          <Image source={require('../assets/images/padaLogo.png')} style={styles.logo} />
          <Login />


          <TouchableOpacity onPress={() => Actions.signup()} >
            <Text style={styles.signup}>Dont have an account? Sign Up!</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    );
  }
}

const styles = {
  mainContainer: {
    paddingRight: 30,
    paddingLeft: 30,
    marginTop:30,
    marginBottom: 60
  },
  logo:{
    alignSelf: 'center',
    width: 250,
    height: 160,
    marginTop:40,
    marginBottom: 40
  },
  separatorTxt:{
    alignSelf: 'center',
    fontSize: 24,
    margin: 15,
    color: '#4285f4'
  },
  signup: {
    alignSelf: 'center'
  }
}

export default Landing;
