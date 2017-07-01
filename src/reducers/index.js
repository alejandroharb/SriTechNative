import { combineReducers } from 'redux';
import CameraReducer from './CameraReducer';
import ProfileReducer from './ProfileReducer';
import InfographReducer from './InfographReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  camera: CameraReducer,
  infoGraphics: InfographReducer,
  auth: AuthReducer
});
