import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Camera from './components/Camera';
import Home from './components/Home';
import Images from './components/Images';

const RouterComponent = () => {
  return(
    <Router sceneStyle={{ paddingTop: 65}}>
      <Scene key="main">
        <Scene key="menu" component={Home} title="Home" initial/>
        <Scene key="visualization">
          <Scene key="camera" component={Camera} title="Get Picture Analysis" initial/>
          <Scene key="gallery" component={Images} title="Choose Image to Analyze" />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent;
