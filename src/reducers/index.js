import { combineReducers } from 'redux';
import CameraReducer from './CameraReducer';
import NavigationReducer from './NavigationReducers';
import InfographReducer from './InfographReducer';

export default combineReducers({
  camera: CameraReducer,
  navBar: NavigationReducer,
  infoGraphics: InfographReducer
});
