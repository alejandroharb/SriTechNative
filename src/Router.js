import React from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import Camera from './components/visualization/Camera';
import Home from './components/Home';
import Images from './components/visualization/Images';
import CamMenu from './components/visualization/CamMenu';
import AIResults from './components/visualization/AIResults';
import Healing from './components/healing/HealingMenu';
import Info from './components/infoGraphics/Info';
import InfoImage from './components/infoGraphics/InfoImage';

const RouterComponent = () => {
  return(
    <Router sceneStyle={{ paddingTop: 65}}>
      <Scene key="main">
        <Scene key="menu" component={Home} title="Home" initial />

        <Scene key="infographs" >
          <Scene key="info" component={Info} title="Info" initial/>
          <Scene key="infoImage" component={InfoImage} title="Info"/>
        </Scene>

        <Scene key="healing" component={Healing} title="Healing" />
        <Scene key="visualization">
          <Scene key="visualizationMenu" component={CamMenu} title="Camera" type={ActionConst.REPLACE} initial />
          <Scene key="camera" component={Camera} title="Foot Analysis" />
          <Scene key="gallery" component={Images} title="Gallery" />
          <Scene key="results" component={AIResults} title="Results" />
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent;
