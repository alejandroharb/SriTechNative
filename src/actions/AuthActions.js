import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  NAME_CHANGED,
  BIRTHDATE_CHANGED,
  GENDER_CHANGED,
  WEIGHT_CHANGED,
  HEIGHT_CHANGED,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL
} from './types';

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch( () => loginUserFail(dispatch));
  }
};

const loginUserFail = (dispatch) => {
  dispatch({type: LOGIN_USER_FAIL});
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })

  Actions.root();
}

export const nameChanged = (text) => {
  return {
    type: NAME_CHANGED,
    payload: text
  }
}

export const birthdateChanged = (date) => {
  return {
    type: BIRTHDATE_CHANGED,
    payload: date
  }
}

export const genderChanged = (gender) => {
  return {
    type: GENDER_CHANGED,
    payload: gender
  }
}

export const weightChanged = (weight) => {
  return {
    type: WEIGHT_CHANGED,
    payload: weight
  }
}

export const heightChanged = (height) => {
  return {
    type: HEIGHT_CHANGED,
    payload: height
  }
}

export const userCreate = ({email, password, name, birthdate, gender, weight, height}) => {
  const birth_date = moment(birthdate).format();
  console.log(`birth_date: ${birth_date}`);
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( user => {
        firebase.database().ref(`users/${user.uid}/records/`)
          .set({ name, birthdate: birth_date, gender, weight, height })
          .then( () => {
            console.log(user);
            createUserSuccess(dispatch, user)
          });
      })
      .catch( () => createUserFail(dispatch));
  }
};

export const createUserSuccess = (dispatch, user) => {
  dispatch({
    type: CREATE_USER_SUCCESS,
    payload: user
  })

  Actions.main();
};

const createUserFail = (dispatch) => {
  dispatch({type: CREATE_USER_FAIL});
};
