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

  return (dispatch) => {
    //-------send image to Watson API-------
    let formData = new FormData();
    formData.append('images_file', {uri: imgPath });
    formData.append('parameters', {uri: RNFS.MainBundlePath + '/myparams.json' })
    axios.post(watson_API_url, formData)
      .then( response => {
        //call function to get max class score value
        let resultClass = collectWatsonResults(response.data);
        //dispatch an action and update state with reducer
        dispatch({type: ANALYSIS_SUCCESS, payload: resultClass})
        //route page to results screen
        Actions.results();
      })
      .catch( error => {console.log(error, error.message)});
  }
}

// function gets highest class score and returns it
const collectWatsonResults = (results) => {
  //only dealing with one classifier in this case, can hard code to be 0 index
  //type array, sorted
  const classes = insertSort(results.images[0].classifiers[0].classes);
  console.log("classes array after sort")
  console.log(classes);
  let len = classes.length;
  let topResults = [];
  //if no results, return null
  if (classes.length < 1) { return null }
  //if only 1 result, return it
  else if (classes.length = 1) { return classes }
  //if array contains 2 or more result classes, then return the top 2
  else { return [classes[len - 1], classes[len - 2]]; }
};

// Analyze certainty in watson result
const analyzeWatsonResults = (maxClass) => {
};

//sorting function
const insertSort = (array) => {
  if(array.lenght = 1){
    return array;
  }
  for(let i = 0; i< array.length; i++){
    let temp = array[i];
    let j = i - 1;;
    //if conditions met (left position greater than current position), shift items right
    while(j>=0 && array[j] > temp){
      array[j+1] = temp;
      j--;
    }
    array[j+1] = temp;
  }
  return array;
}
