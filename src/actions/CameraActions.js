import {
  IMAGE_CHOSEN,
  ANALYSIS_SUCCESS
} from './types';
import { Actions } from 'react-native-router-flux';
import RNFS from 'react-native-fs';
import axios from 'axios';
import { watsonKey, watson_API_url} from '../config/watsonAPI';

export const imageChosen = (path) => {
  return {
    type: IMAGE_CHOSEN,
    payload: path
  }
};

export const imageSubmit = (imgPath) => {
  console.log("inside imageSubmit function: " + imgPath)
  return (dispatch) => {
    //-------send image to Watson API-------
    let formData = new FormData();
    formData.append('images_file', {uri: imgPath });
    formData.append('parameters', {uri: RNFS.MainBundlePath + '/myparams.json' })
    axios.post(watson_API_url, formData)
      .then( response => {
        // console.log(response.data);
        dispatch({type: ANALYSIS_SUCCESS, payload: response.data})
        Actions.results();
      })
      .catch( error => {console.log(error)});
  }
}
