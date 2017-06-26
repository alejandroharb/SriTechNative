import React, {Component} from 'react';
import { Text } from 'react-native';
import { Scene, Router, Actions, ActionConst, TabBar, Modal } from 'react-native-router-flux';
import Camera from './components/visualization/Camera';
import Home from './components/Home';
import Images from './components/visualization/Images';
import CamMenu from './components/visualization/CamMenu';
import AIResults from './components/visualization/AIResults';
import Healing from './components/healing/HealingMenu';
import Info from './components/infoGraphics/Info';
import InfoImage from './components/infoGraphics/InfoImage';
import Profile from './components/profile/Profile';
import Landing from './components/Landing';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { changeIcon } from './actions/NavigationActions';
import { connect } from 'react-redux';

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  switch(title){
    case "home":
      return (
        <Icon name="dashboard" size={30} color={selected ? '#3d88ec' :'#dcdcdc'} />
      );
    case "selfcare":
      return (
        <Icon name="healing" size={30} color={selected ? '#3d88ec' :'#dcdcdc'} />
      );
    case "camera":
      return (
        <Icon name="photo-camera" size={30} color={selected ? '#3d88ec' :'#dcdcdc'} />
      );
    case "map":
      return (
        <Icon name="map" size={30} color={selected ? '#3d88ec' :'#dcdcdc'} />
      );
    case "profile":
      return (
        <Icon name="person" size={30} color={selected ? '#3d88ec' :'#dcdcdc'} />
      );
  }

}

class RouterComponent extends Component {
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
      <Router >
      <Scene key="root">

        <Scene key="main" tabs={true} tabBarStyle={{ backgroundColor: '#FFFFFF' }} >

          <Scene key="homeMenu" icon={TabIcon} title="home">
            <Scene key="menu" component={Home} title="Home" initial />
          </Scene>


          <Scene key="healing" icon={TabIcon} title="selfcare">
            <Scene key="healingContent" component={Healing} title="Healing" />
          </Scene>

          <Scene
            key="visualization"
            icon={TabIcon}
            title="camera"
          >
              <Scene key="visualizationMenu" component={CamMenu} title="Camera" initial />
              <Scene key="camera" component={Camera} title="Foot Analysis" />
              <Scene key="gallery" component={Images} title="Gallery" />
              <Scene key="results" component={AIResults} title="Results" />
          </Scene>

          <Scene
            key="map"
            icon={TabIcon}
            title="map"
          >
          </Scene>

          <Scene
            title="profile"
            key="profile"
            icon={TabIcon}
          >
            <Scene key="profilePage" component={Profile} />
          </Scene>

        </Scene>

      </Scene>

      </Router>
    );
  }
}

mapStateToProps = (state) => {
  const { menuIcon, healingIcon, cameraIcon, mapIcon, profileIcon } = state.navBar;
  return { menuIcon, healingIcon, cameraIcon, mapIcon, profileIcon };
}

export default connect(mapStateToProps, { changeIcon })(RouterComponent);
