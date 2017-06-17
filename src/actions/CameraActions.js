import { IMAGE_TAKEN } from './types';


export const imageTaken = (path) => {
  return {
    type: IMAGE_TAKEN,
    payload: path
  }
};
