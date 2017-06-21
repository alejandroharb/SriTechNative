import {
  MENU_NAV_PRESSED,
  HEALING_NAV_PRESSED,
  CAMERA_NAV_PRESSED,
  MAP_NAV_PRESSED,
  PROFILE_NAV_PRESSED
} from './types';
import { Actions } from 'react-native-router-flux';

const navIconActiveColor = '#3d88ec';
const navIconInactiveColor = '#dcdcdc';

const INITIAL_STATE = {
  menuIcon: navIconInactiveColor,
  healingIcon: navIconInactiveColor,
  cameraIcon: navIconInactiveColor,
  mapIcon: navIconInactiveColor,
  profileIcon: navIconInactiveColor
}

export const changeIcon = (navIcon) => {
  switch(navIcon){
    case 'menuIcon':
      Actions.menu();
      return { type: MENU_NAV_PRESSED, payload: { initial: INITIAL_STATE, menuIcon: navIconActiveColor }};
    case 'healingIcon':
      // Actions.healing();
      return { type: HEALING_NAV_PRESSED, payload: { initial: INITIAL_STATE, healingIcon: navIconActiveColor }};
    case 'cameraIcon':
      Actions.visualization();
      return { type: CAMERA_NAV_PRESSED, payload: {initial: INITIAL_STATE, cameraIcon: navIconActiveColor }};
    case 'mapIcon':
      // Actions.map();
      return { type: MAP_NAV_PRESSED, payload: { initial: INITIAL_STATE, mapIcon: navIconActiveColor }};
    case 'profileIcon':
      //Actions.profile();
      return { type: PROFILE_NAV_PRESSED, payload: { initial: INITIAL_STATE, profileIcon: navIconActiveColor}};
  }
};
