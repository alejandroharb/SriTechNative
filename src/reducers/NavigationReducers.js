import {
  MENU_NAV_PRESSED,
  HEALING_NAV_PRESSED,
  CAMERA_NAV_PRESSED,
  MAP_NAV_PRESSED,
  PROFILE_NAV_PRESSED
} from '../actions/types';

const navIconInactiveColor = '#dcdcdc';

const INITIAL_STATE = {
  menuIcon: navIconInactiveColor,
  healingIcon: navIconInactiveColor,
  cameraIcon: navIconInactiveColor,
  mapIcon: navIconInactiveColor,
  profileIcon: navIconInactiveColor
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case MENU_NAV_PRESSED:
      return { ...state, ...action.payload.initial, menuIcon: action.payload.menuIcon };
    case HEALING_NAV_PRESSED:
      return { ...state, ...action.payload.initial, healingIcon: action.payload.healingIcon };
    case CAMERA_NAV_PRESSED:
      return { ...state, ...action.payload.initial, cameraIcon: action.payload.cameraIcon };
    case MAP_NAV_PRESSED:
      return { ...state, ...action.payload.initial, mapIcon: action.payload.mapIcon };
    case PROFILE_NAV_PRESSED:
      return { ...state, ...action.payload.initial, profileIcon: action.payload.profileIcon };
    default:
      return state;
  }
}
