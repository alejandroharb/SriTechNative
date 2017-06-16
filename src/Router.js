import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Camera from './components/Camera';
import Home from './components/Home';

const RouterComponent = () => {
  return(
    <Router sceneStyle={{ paddingTop: 65}}>
      <Scene key="main">
        <Scene key="Menu" component={Home} title="Home" initial/>
        <Scene key="camera" component={Camera} title="Get Picture Analysis" />
      </Scene>
    </Router>
  )
}

export default RouterComponent;
