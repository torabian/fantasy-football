import { Action } from 'redux';
import { FETCH_PLAYERS_SUCCESSFUL } from './types';

export function playersReducer(state = [], action: Action<any>) {
  if (action.type === FETCH_PLAYERS_SUCCESSFUL) {
    return (action as any).payload;
  }
  return state;
}
