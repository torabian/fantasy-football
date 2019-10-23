import React from 'react';
import './PlayersList.scss';
import PlayersListItem from './PlayersListItem';
import { connect } from 'react-redux';
import { Player } from '../definitions';
import { AddPlayer, DiscardPlayer } from '../actions/PlayerActions';
import { PlayerCanBeSelected } from '../api/FootballRules';

interface IProps {
  players?: Array<Player>;
  showRoles?: Array<string>;
  teamPlayers: Array<Player>;
}

class PlayersList extends React.Component<IProps> {
  addPlayer = (player: Player) => {
    AddPlayer(player);
  };

  discardPlayer = (player: Player) => {
    DiscardPlayer(player);
  };

  render() {
    let { players, showRoles, teamPlayers } = this.props;
    if (showRoles && showRoles.length && players) {
      players = players.filter(player =>
        (showRoles || []).includes(player.Role)
      );
    }

    return (
      <div className={'PlayersList'}>
        {(players || []).map(player => {
          const isSelected = !!teamPlayers.find(
            teamPlayer => teamPlayer.UID === player.UID
          );

          // based on football rules, user might not be able to select
          const isDisabled = !PlayerCanBeSelected(player, teamPlayers);

          return (
            <PlayersListItem
              key={player.UID}
              player={player}
              isSelected={isSelected}
              isDisabled={isDisabled}
              discardPlayer={this.discardPlayer}
              addPlayer={this.addPlayer}
            />
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    players: state.players,
    teamPlayers: state.teamPlayers
  };
}

export default connect(
  mapStateToProps,
  {}
)(PlayersList);
