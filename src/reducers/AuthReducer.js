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
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  loading: false,
  name: '',
  birthdate: new Date(),
  gender: 0,
  weight: 0,
  height: 0
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading:true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false};
    case NAME_CHANGED:
      return { ...state, name: action.payload };
    case BIRTHDATE_CHANGED:
      return { ...state, birthdate: action.payload };
    case GENDER_CHANGED:
      return { ...state, gender: action.payload };
    case WEIGHT_CHANGED:
      return { ...state, weight: action.payload };
    case HEIGHT_CHANGED:
      return { ...state, height: action.payload };
    case CREATE_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case CREATE_USER_FAIL:
      return { ...state, error: 'Account Creation Failed.', loading: false };
    default:
      return state;
  }
}
