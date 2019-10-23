import { Player } from '../definitions';

/**
 * @description There are several rules that can affect how a football team is arranged.
 * Given a player, and the current status of the team, it will find out if the player,
 * can be added or not.
 */
export function PlayerCanBeSelected(
  player: Player,
  teamPlayers: Array<Player>
) {
  const total = teamPlayers.length;
  if (total === 11) {
    return false;
  }

  const countGoalKeepers = teamPlayers.filter(p => p.Role === 'gk').length;
  // each team can have only one goal keeper.
  if (countGoalKeepers === 1 && player.Role === 'gk') {
    return false;
  }

  // at least a goal keeper should be there
  if (total === 10 && player.Role !== 'gk') {
    return false;
  }

  const countDefenders = teamPlayers.filter(p => p.Role === 'def').length;
  // Maximum 5 defenders
  if (countDefenders === 5 && player.Role === 'def') {
    return false;
  }

  const countMidfielders = teamPlayers.filter(p => p.Role === 'mid').length;
  // Maximum 5 Midfielders
  if (countMidfielders === 5 && player.Role === 'mid') {
    return false;
  }

  const countForwards = teamPlayers.filter(p => p.Role === 'for').length;
  // Maximum 5 Forwards
  if (countForwards === 3 && player.Role === 'for') {
    return false;
  }

  // We need at least 3 forwards
  if (countForwards < 3 && total >= 8 && player.Role !== 'for') {
    return false;
  }

  if (countDefenders > 3 && total > 8 && player.Role === 'def') {
    return false;
  }

  if (countMidfielders > 3 && total > 8 && player.Role === 'mid') {
    return false;
  }

  return true;
}
