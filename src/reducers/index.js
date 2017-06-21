import { combineReducers } from 'redux';
import CameraReducer from './CameraReducer';
import NavigationReducer from './NavigationReducers';

export default combineReducers({
  camera: CameraReducer,
  navBar: NavigationReducer
});
