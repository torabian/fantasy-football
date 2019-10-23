import React from 'react';
import './Playground.scss';
import { connect } from 'react-redux';
import { Team, Player } from '../definitions';

interface IProps {
  teamPlayers: Array<Player>;
}

class Playground extends React.Component<IProps> {
  render() {
    const team = new Team(this.props.teamPlayers);
    const goalKeeper = team.GetGoalKeeper();
    const defenders = team.GetDefenders();
    const midfielders = team.GetMidfielders();
    const forwards = team.GetForwards();

    return (
      <div className="Playground">
        <div className="field">
          <div className="play-field">
            <img alt="player" src="/field.png" className="field-image" />
            <div className="players-holder">
              <div className="goal-keeper players-section">
                {!goalKeeper ? (
                  <img alt="player" src={"/shirt.svg"} className="player-placeholder animate-focus" />
                ) : null}
                {goalKeeper ? (
                  <img alt="player" src={goalKeeper.TeamShirt} className="player-placeholder player-placeholder-selected" />
                ) : null}
              </div>
              <div className="defender players-section">
                {[1, 2, 3, 4, 5].map((t, i) => {
                  if (i < defenders.length) {
                    return (
                      <img alt="player" src={defenders[i].TeamShirt} className="player-placeholder-selected" />
                    );
                  }
                  return (
                    <img alt="player" src="/shirt.svg" className="player-placeholder animate-focus" />
                  );
                })}
              </div>
              <div className="midfielder players-section">
                {[1, 2, 3, 4, 5].map((t, i) => {
                  if (i < midfielders.length) {
                    return (
                      <img alt="player" src={midfielders[i].TeamShirt} className="player-placeholder-selected" />
                    );
                  }
                  return (
                    <img alt="player" src="/shirt.svg" className="player-placeholder animate-focus" />
                  );
                })}
              </div>
              <div className="forward players-section">
                {[1, 2, 3].map((t, i) => {
                  if (i < forwards.length) {
                    return (
                      <img alt="player" src={forwards[i].TeamShirt} className="player-placeholder-selected" />
                    );
                  }
                  return (
                    <img alt="player" src="/shirt.svg" className="player-placeholder animate-focus" />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    teamPlayers: state.teamPlayers
  };
}

export default connect(
  mapStateToProps,
  {}
)(Playground);
