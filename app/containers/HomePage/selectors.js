/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectBerita = () => createSelector(
  selectHome,
  (homeState) => homeState.get('berita')
);
const makeSelectBeritaSuccess = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loadBeritaSuccess')
);
const makeSelectBeritaError = () => createSelector(
  selectHome,
  (homeState) => homeState.get('loadBeritaError')
);

export {
  selectHome,
  makeSelectBerita,
  makeSelectBeritaSuccess,
  makeSelectBeritaError,
};
