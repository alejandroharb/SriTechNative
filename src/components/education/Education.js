import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { CardSection } from '../common';

class Education extends Component {
  render(){
    const { mainContainer, videoSection, title, image } = styles;
    return(
      <View style={mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CardSection style={videoSection}>
            <Image source={require('../../assets/images/tamilvideo1.png')} style={image}/>
            <Text style={title}>Diabetic Foot Care Awareness Programme in Tamil</Text>
          </CardSection>

          <CardSection style={videoSection}>
            <Image source={require('../../assets/images/sriLankaVideo3.png')} style={image}/>
            <Text style={title}>Diabetes in Sri Lanka</Text>
          </CardSection>

          <CardSection style={videoSection}>
            <Image source={require('../../assets/images/tamilvideo2.png')} style={image}/>
            <Text style={title}>Diabetic Foot Care Awareness Programme in Tamil</Text>
          </CardSection>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  mainContainer: {
    marginTop: 60,
    paddingRight: 15,
    paddingLeft: 15,
    marginBottom: 40
  },
  videoSection: {
    flexDirection: 'column',
    marginTop: 15
  },
  image: {
    alignSelf: 'center',
    height: 200,
    padding: 15
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 10
  }
}

export default Education;
