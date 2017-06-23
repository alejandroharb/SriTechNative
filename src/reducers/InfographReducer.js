import { INFOGRAPH_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  image: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case INFOGRAPH_CHANGED:
      return { ...state, image: action.payload };
    default:
      return state;
  }
};
