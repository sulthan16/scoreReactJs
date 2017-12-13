/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  LOAD_BERITA,
  LOAD_BERITA_SUCCESS,
  LOAD_BERITA_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  getBerita: null,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BERITA:
      return state;
    case LOAD_BERITA_SUCCESS:
      return state
      .set('loadBeritaSuccess', action.result);
    case LOAD_BERITA_ERROR:
      return state
      .set('loadBeritaErr', action.message);
    default:
      return state;
  }
}

export default homeReducer;
