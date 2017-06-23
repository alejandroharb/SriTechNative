import { INFOGRAPH_CHANGED } from './types';
import { Actions } from 'react-native-router-flux';

export const viewImage = (path) => {
  return (dispatch) => {
    dispatch({type: INFOGRAPH_CHANGED, payload: path});
    Actions.infoImage();
  }
};
