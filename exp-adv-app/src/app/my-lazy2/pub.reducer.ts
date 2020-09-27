import { createReducer, on } from '@ngrx/store';
import {  disablePub, enablePub ,togglePub } from './pub.actions';

export const initialPub = false;

// define reducer behavior :
const _pubReducer = createReducer(
  initialPub,
  on(disablePub, (state) => false),
  on(enablePub, (state) => true),
  on(togglePub, (state) => !state)
);

// apply reducer on state and action :
export function pubReducer(state, action) {
  return _pubReducer(state, action);//return new state
}