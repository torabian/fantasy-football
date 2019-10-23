import { Action } from 'redux';
import { ADD_PLAYER_TO_TEAM, REMOVE_PLAYER_FROM_TEAM } from './types';

export function teamPlayersReducer(
  state: Array<any> = [],
  action: Action<any>
) {
  if (action.type === ADD_PLAYER_TO_TEAM) {
    const player = (action as any).payload;
    return [...state, player];
  }
  if (action.type === REMOVE_PLAYER_FROM_TEAM) {
    const removePlayer = (action as any).payload;
    return state.filter(player => player.UID !== removePlayer.UID);
  }
  return state;
}
