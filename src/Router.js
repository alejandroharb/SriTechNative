import React, {Component} from 'react';
import { Scene, Router, Actions, ActionConst, TabBar } from 'react-native-router-flux';
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
import { navigateToProfile } from './actions/NavigationActions';
import { connect } from 'react-redux';
import CommunityDiary from './components/diaries/Diary';

// Simple component to render something in place of icon


class RouterComponent extends Component {
  constructor(){
    super();

    //bind all methods to component's 'this'
    this.pressProfile = this.pressProfile.bind(this);
    this.TabIcon = this.TabIcon.bind(this);
  }

  TabIcon({ selected, title }) {
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
        if( selected ) { this.pressProfile() }
        return (
          <Icon name="person" size={30} color={selected ? '#3d88ec' :'#dcdcdc'} />
        );
    }

  }

  pressProfile(){
    this.props.navigateToProfile();
  }

  render(){
    return(
      <Router sceneStyle={{ paddingTop: 0}} navigationBarStyle={styles.navBarStyle} titleStyle={styles.navBarTitle}>

        <Scene key="authentication" initial hideNavBar>
          <Scene key="landing" component={Landing} initial/>
          <Scene key="login" component={Login} />
          <Scene key="signup" component={SignUp} title="Create Account" />
        </Scene>

        <Scene key="root">
          {/* Tab Container */}
          <Scene key="main" tabs={true} tabBarStyle={styles.tabBar} >

            {/* Tab and it's scenes */}
            <Scene key="homeMenu" icon={this.TabIcon} title="home" >
              <Scene key="menu" component={Home} title="Home" initial />
              <Scene key="infographs" >
                <Scene key="info" component={Info} title="Info" initial/>
                <Scene key="infoImage" component={InfoImage} title="Info"/>
              </Scene>
              <Scene key="diaries" component={CommunityDiary} title="Diaries"/>
            </Scene>
            {/* Tab and it's scenes */}
            <Scene key="healing" icon={this.TabIcon} title="selfcare" >
              <Scene key="healingContent" component={Healing} title="Healing" />
            </Scene>
            {/* Tab and it's scenes */}
            <Scene key="visualization" icon={this.TabIcon} title="camera" >
                <Scene key="visualizationMenu" component={CamMenu} title="Camera" initial />
                <Scene key="camera" component={Camera} title="Foot Analysis" hideNavBar/>
                <Scene key="gallery" component={Images} title="Gallery" sceneStyle={{paddingTop: 15}} hideNavBar/>
                <Scene key="results" component={AIResults} title="Results" hideNavBar={false}/>
            </Scene>
            {/* Tab and it's scenes */}
            <Scene key="map" icon={this.TabIcon} title="map">
            </Scene>
            {/* Tab and it's scenes */}
            <Scene key="profile" icon={this.TabIcon} title="profile" hideNavBar>
              <Scene key="profilePage" component={Profile} />
            </Scene>

          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = {
  tabBar: {
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    elevation:1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  },
  navBarStyle: {
    backgroundColor: '#4285f4',
    paddingBottom: 15
  },
  navBarTitle: {
    color: '#FAFAFA',
    fontSize: 24,
    fontWeight: '300'
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps, { navigateToProfile })(RouterComponent);
