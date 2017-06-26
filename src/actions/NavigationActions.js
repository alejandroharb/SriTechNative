import { PROFILE_NAV_PRESSED } from './types';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export const navigateToProfile = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/records`).once('value')
      .then( (snapshot) => {
          dispatch({ type: PROFILE_NAV_PRESSED, payload: snapshot.val() });
          Actions.profilePage();
       })
  };
};
