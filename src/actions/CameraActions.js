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
        console.log(response);
        //call function to get max class score value
        let resultClass = collectWatsonResults(response.data);

        console.log(resultClass);
        console.log(!resultClass);
        //if no results, no matches
        if(!resultClass){
          //dispatch an action and update state with reducer
          dispatch({type: ANALYSIS_SUCCESS, payload: {recommendation: recommendations[5]}})
          //route page to results screen
          Actions.results();
        } else {
          //fix score
          resultClass[0].score = parseFloat(resultClass[0].score * 100).toFixed(1);
          //add recommendation property
          if (resultClass[0].class == "Level_0"){
            resultClass[0].class = "Grade 0";
            resultClass[0].recommendation = recommendations[0];
          }
          if (resultClass[0].class == "Level_1"){
            resultClass[0].class = "Grade 1";
            resultClass[0].recommendation = recommendations[1];
          }
          if (resultClass[0].class == "Level_2"){
            resultClass[0].class = "Grade 2";
            resultClass[0].recommendation = recommendations[2];
          }


          //dispatch an action and update state with reducer
          dispatch({type: ANALYSIS_SUCCESS, payload: {matchResults: resultClass}})
          //route page to results screen
          Actions.results();
        }

      })
      .catch( error => {console.log(error, error.message)});
  }
}

const recommendations = [
  'Remember to wash and clean foot every morning and every night. Your foot needs time to heal. Consider elevating your feet when you come home to avoid worsening of condition. Talk to your community health worker about getting new shoes',
  'You are at high risk of losing blood supply to portions of your feet soon. Continue to clean feet properly and frequently. Contact a community health worker with in the next three days.',
  'Your ulcer has progressed to dangerous levels and can cause serious harm to your body. Seek help from a community health worker immediately. They can show you how to care for your leg. Continue to elevate leg and wash with salt water. Request to see physician as soon as possible.',
  'Your foot needs to be seen immediately by a physician. Please contact your local community health worker to help facilitate appointment. Your community healthworker will help find arrangements to tend to your business.',
  'This is an emergency. Go to the hospital immediately.',
  'We did not detect an ulcer. Make sure to wash and clean your feet every morning and every night to prevent ulcers.'
];

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
  return array.reverse();
}

// function gets highest class score and returns it
const collectWatsonResults =  (results) => {
  if(results.images[0].classifiers.length === 0){
    return null;
  } else {
    //only dealing with one classifier in this case, can hard code to be 0 index
    //type array, sorted
    let classes = insertSort(results.images[0].classifiers[0].classes);
    //if only 1 result, return it
    if (classes.length = 1) { return classes }
    //if array contains 2 or more result classes, then return the top 2
    else { return [classes[0], classes[1]]; }
  }
};
