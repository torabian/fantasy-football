import React from 'react';
import classnames from 'classnames';

import './PlayersListItem.scss';

import { Player } from '../definitions';
interface IProps {
  player: Player;
  addPlayer: (player: Player) => void;
  discardPlayer: (player: Player) => void;
  isSelected?: boolean;
  isDisabled?: boolean;
}

class PlayersListItem extends React.Component<IProps> {
  addPlayer = () => {
    this.props.addPlayer(this.props.player);
  };

  discardPlayer = () => {
    this.props.discardPlayer(this.props.player);
  }

  render() {
    const { player, isSelected, isDisabled } = this.props;
    return (
      <div
        className={classnames(
          'PlayersListItem',
          isDisabled && !isSelected ? 'disabled': null,
          isSelected ? 'selected' : null
        )}
      >
        <div className="player-item-action">
        {!isSelected && !isDisabled ? (
            <button className="player-action-btn" onClick={this.addPlayer}>
              <i className="fa fa-plus"></i>
            </button>
          ) : null}
          {isSelected ? (
            <button className="player-action-btn" onClick={this.discardPlayer}>
              <i className="fa fa-check"></i>
            </button>
          ) : null}
        </div>
        <div className="player-item-icon">
          <img alt="player" src={player.TeamShirt} className="player-image" />
          <span className="player-role">{player.Role}</span>
        </div>
        <div className="player-item-info">
          <div className="player-item-name">{player.DisplayName()}</div>
          <div className="player-item-location">
            <span className="player-item-team">{player.Team}</span>
            <span className="player-item-club">{player.Club}</span>
          </div>
        </div>
        <div className="player-item-form">{player.Form}</div>
        <div className="player-item-pts">{player.PTS}</div>
        <div className="player-item-price">{player.PriceFormatted()}</div>
      </div>
    );
  }
}

export default PlayersListItem;
