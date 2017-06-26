import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { CardSection } from '../common';

class CommunityDiary extends Component {
  render(){
    const { image, mainContainer, scrollContainer, diarySection, title, diaryText } = styles;

    return(
      <View style={mainContainer}>
        <ScrollView style={scrollContainer}>
          <CardSection style={diarySection}>
            <Image source={require('../../assets/images/sri_lankan_elderly.jpeg')} style={image}/>
            <Text style={title}>Maging Diabetes </Text>
            <Text style={diaryText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </CardSection>

          <CardSection style={diarySection}>
            <Image source={require('../../assets/images/sr-man.png')} style={image}/>
            <Text style={title}>Almost Lost My Foot </Text>
            <Text style={diaryText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </CardSection>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingRight: 15,
    paddingLeft:15,
    marginTop:80,
    paddingBottom: 50
  },
  scrollContainer:{
    flex:1
  },
  diarySection: {
    flexDirection: 'column',
    marginTop: 15
  },
  image: {
    alignSelf: 'center',
    height: 250,
    padding: 15
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10
  },
  diaryText: {
    fontSize: 18
  }
}

export default CommunityDiary;
