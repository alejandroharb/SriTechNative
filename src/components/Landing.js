import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Card, CardSection } from './common';
import Login from './auth/Login';

class Landing extends Component {
  render(){
    return(

      <View style={{paddingTop: 30}}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <Card>
          <Login />

          <Text style={styles.separatorTxt}> OR </Text>

          <CardSection>
            <Button onPress={() => Actions.signup()} >
              Sign Up
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

const styles = {
  logo:{
    alignSelf: 'center',
    width: 80,
    height: 80,
    margin: 30
  },
  separatorTxt:{
    alignSelf: 'center',
    fontSize: 24,
    margin: 15,
    color: '#4285f4'
  }
}

export default Landing;
