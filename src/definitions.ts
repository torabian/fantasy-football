import { formatNumber } from './Common';

export interface IPlayer {
  first_name: string;
  last_name: string;
  role: string;
  team: string;
  club: string;
  team_shirt: string;
  pts: number;
  form: number;
  price: number;
}

export class Player {
  public FirstName: string = '';
  public LastName: string = '';
  public Role: string = '';
  public Team: string = '';
  public Club: string = '';
  public TeamShirt: string = '';
  public UID: string = '' + Math.random();
  public PTS: number = 0;
  public Form: number = 0;

  private price: number = 0;

  constructor(player: IPlayer) {
    this.FirstName = player.first_name;
    this.LastName = player.last_name;
    this.Role = player.role;
    this.Team = player.team;
    this.Club = player.club;
    this.TeamShirt = player.team_shirt;
    this.PTS = player.pts;
    this.Form = player.form;
    this.price = +player.price;
  }

  DisplayName() {
    return [this.FirstName.substr(0, 1), this.LastName].join(' ');
  }

  PriceFormatted() {
    if (!this.price) {
      return '-';
    }
    return formatNumber(this.price);
  }
}

export class Team {
  private players: Array<Player> = [];
  constructor(players: Array<Player>) {
    this.players = players;
  }

  GetForwards() {
    return this.players.filter(player => player.Role === 'for');
  }

  GetGoalKeeper() {
    return this.players.find(player => player.Role === 'gk');
  }

  GetDefenders() {
    return this.players.filter(player => player.Role === 'def');
  }

  GetMidfielders() {
    return this.players.filter(player => player.Role === 'mid');
  }
}
