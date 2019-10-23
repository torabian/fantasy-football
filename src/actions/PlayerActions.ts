import { GetPlayers } from '../api/Requests';
import { store } from '../Store';
import {
  FETCH_PLAYERS_SUCCESSFUL,
  ADD_PLAYER_TO_TEAM,
  REMOVE_PLAYER_FROM_TEAM
} from '../reducers/types';
import { Player } from '../definitions';

export async function FetchPlayers() {
  const players = await GetPlayers();
  if (!players || !players.length) {
    // @todo some error handling. It's weird no data
    return;
  }
  store.dispatch({
    type: FETCH_PLAYERS_SUCCESSFUL,
    payload: players.map(player => new Player(player))
  });
}

export function AddPlayer(player: Player) {
  store.dispatch({
    type: ADD_PLAYER_TO_TEAM,
    payload: player
  });
}

export function DiscardPlayer(player: Player) {
  store.dispatch({
    type: REMOVE_PLAYER_FROM_TEAM,
    payload: player
  });
}
