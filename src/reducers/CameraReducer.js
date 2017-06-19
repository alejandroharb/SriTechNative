import { IMAGE_CHOSEN, ANALYSIS_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  image: "",
  results: {}
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case IMAGE_CHOSEN:
      return { ...state, image: action.payload };
    case ANALYSIS_SUCCESS:
      return { ...state, results: action.payload };
    default:
      return state;
  }
}
