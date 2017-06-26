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
class Home extends Component {
  constructor(){
    super();
  }
  render(){
    const { buttonTextStyle, buttonStyle, homeContainer, menuSection, textSection } = styles;

    return(
      <View style={homeContainer}>
        <View style={menuSection}>

	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>

      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{marginBottom: 20, marginRight: 10, marginLeft: 40, height: 227, backgroundColor: 'salmon'}}>
			<TouchableOpacity onPress={() => Actions.infographs()}>
				<Image style={{width: undefined}} source={info}>
					<View style={{flex:1, justifyContent: 'flex-end', flexDirection: 'column'}}>
						<Text style={textSection}>
							foot care
						</Text>
					</View>
				</Image>
			</TouchableOpacity>
		</View>
        <View style={{marginLeft: 40, marginRight: 10, height: 136, backgroundColor: 'powderblue'}}>
			<TouchableOpacity onPress={ () => Actions.diaries() }>
				<Image style={{width: undefined}} source={userstories}>
					<View style={{flex:1, justifyContent: 'flex-end', flexDirection: 'column'}}>
						<Text style={textSection}>
							community{"\n"}diaries
						</Text>
					</View>
				</Image>
			</TouchableOpacity>
		</View>
      </View>

      <View style={{flex: 1, flexDirection: 'column',}}>
        <View style={{marginLeft: 10, marginRight: 40, height: 136, backgroundColor: 'lightgreen'}}>
			<TouchableOpacity>
				<Image style={{width: undefined}} source={videos}>
					<View style={{flex:1, justifyContent: 'flex-end', flexDirection: 'column'}}>
						<Text style={textSection}>
							education
						</Text>
					</View>
				</Image>
			</TouchableOpacity>
		</View>
        <View style={{marginLeft: 10, marginTop: 20, marginRight: 40, height: 227, backgroundColor: 'steelblue'}}>
			<TouchableOpacity onPress={ () => { Actions.main(); console.log("button pressed") } }>
				<Image style={{width: undefined}} source={forum}>
					<View style={{flex:1, justifyContent: 'flex-end', flexDirection: 'column'}}>
						<Text style={textSection}>
							forum
						</Text>
					</View>
				</Image>
			</TouchableOpacity>
		</View>
      </View>

    </View>

        </View>

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
	  fontSize: 20,
	  paddingLeft: 6,
	  paddingBottom: 6
  }
}

export default Home;
