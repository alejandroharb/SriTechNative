import { IMAGE_TAKEN } from '../actions/types';

const INITIAL_STATE = {
  image: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case IMAGE_TAKEN:
      return { ...state, image: action.payload };
    default:
      return state;
  }
}
