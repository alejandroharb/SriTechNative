import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { changeIcon } from '../../actions/NavigationActions';

class NavBar extends Component {
  constructor(){
    super();

    this.state = {
      menuIcon: '#dcdcdc',
      healingIcon: '#dcdcdc',
      cameraIcon: '#dcdcdc',
      mapIcon: '#dcdcdc',
      profileIcon: '#dcdcdc',
    }

    //bind all methods to component's 'this'
    this.pressCamera = this.pressCamera.bind(this);
    this.pressProfile = this.pressProfile.bind(this);
    this.pressHealing = this.pressHealing.bind(this);
    this.pressMap = this.pressMap.bind(this);
    this.pressProfile = this.pressProfile.bind(this);
  }

  pressCamera(){
    this.props.changeIcon('cameraIcon');
  };

  pressHealing(){
    this.props.changeIcon('healingIcon');
  }

  pressMenu(){
    this.props.changeIcon('menuIcon');
  }

  pressMap() {
    this.props.changeIcon('mapIcon');
  }

  pressProfile(){
    this.props.changeIcon('profileIcon');
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={{flex:1, justifyContent: 'center'}}>
          <Icon name="dashboard" size={30} color={this.props.menuIcon} onPress={ () => this.pressMenu() }/>
          <Text>Home</Text>
        </View>
        <Icon name="healing" size={30} color={this.props.healingIcon} onPress={ () => this.pressHealing() }/>
        <Icon name="photo-camera" size={30} color={this.props.cameraIcon} onPress={ () => this.pressCamera() }/>
        <Icon name="map" size={30} color={this.props.mapIcon} onPress={ () => this.pressMap() }/>
        <Icon name="person" size={30} color={this.props.profileIcon} onPress={ () => this.pressProfile() }/>
      </View>
    )
  }
}

const styles = {
  container: {
    height:60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    elevation:1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  }
}

mapStateToProps = (state) => {
  const { menuIcon, healingIcon, cameraIcon, mapIcon, profileIcon } = state.navBar;
  return { menuIcon, healingIcon, cameraIcon, mapIcon, profileIcon };
}

export default connect(mapStateToProps, { changeIcon })(NavBar) ;
