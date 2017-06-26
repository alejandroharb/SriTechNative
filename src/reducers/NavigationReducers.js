import { PROFILE_NAV_PRESSED } from '../actions/types';

const navIconInactiveColor = '#dcdcdc';

const INITIAL_STATE = {
  user: {}
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case PROFILE_NAV_PRESSED:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
