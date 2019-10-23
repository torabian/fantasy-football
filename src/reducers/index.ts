import { playersReducer } from './playersReducer';
import { combineReducers } from 'redux';
import { teamPlayersReducer } from './teamPlayersReducer';

export default combineReducers({
  players: playersReducer,
  teamPlayers: teamPlayersReducer
});
