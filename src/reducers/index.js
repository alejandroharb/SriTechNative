import { combineReducers } from 'redux';
import CameraReducer from './CameraReducer';
import NavigationReducer from './NavigationReducers';
import InfographReducer from './InfographReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  camera: CameraReducer,
  navBar: NavigationReducer,
  infoGraphics: InfographReducer,
  auth: AuthReducer
});
