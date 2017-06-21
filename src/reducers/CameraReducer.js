import { IMAGE_CHOSEN, ANALYSIS_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  image: "",
  watsonResults: {}
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case IMAGE_CHOSEN:
      return { ...state, image: action.payload };
    case ANALYSIS_SUCCESS:
      return { ...state, watsonResults: action.payload };
    default:
      return state;
  }
}
