import streams from '../apis/streams';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

//creating a new action creator to handle the creation of api requests
export const createStream = (formValues) => async (dispatch) => {
  const response = await streams.post('/streams', formValues);

  dispatch({ type: CREATE_STREAM, payload: response.data });
};
//post request w axios above, we put all our formValues in there
