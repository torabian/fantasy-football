import { IPlayer } from '../definitions';

const MockedPlayers = [
  {
    first_name: 'P',
    last_name: 'Aubamey',
    team: 'Arsenal',
    club: 'Crystal Palace',
    role: 'def',
    price: 13000000,
    pts: 58,
    form: 6.2,
    team_shirt: '/shirt_1.svg'
  },
  {
    first_name: 'R',
    last_name: 'Firmino',
    team: 'Liverpool',
    club: 'Spurs',
    role: 'mid',
    price: 12400000,
    pts: 49,
    form: 4.4,
    team_shirt: '/shirt_2.svg'
  },
  {
    first_name: 'A',
    last_name: 'Lacazette',
    team: 'Arsenal',
    club: 'Crystal Palace',
    role: 'gk',
    price: 11800000,
    pts: 14,
    form: 3.5,
    team_shirt: '/shirt_1.svg'
  },
  {
    first_name: 'T',
    last_name: 'Abraham',
    team: 'Burnley',
    club: 'Chelsea',
    role: 'for',
    price: 11.5,
    pts: 42,
    form: 4.3,
    team_shirt: '/shirt_3.svg'
  },
  {
    first_name: 'S',
    last_name: 'Haller',
    team: 'West Ham',
    club: 'Sheffield United',
    role: 'for',
    price: 10300000,
    pts: 42,
    form: 4,
    team_shirt: '/shirt_4.svg'
  },
  {
    first_name: 'B',
    last_name: 'Saka',
    team: 'Arsenal',
    club: 'Crystal Palace',
    role: 'for',
    price: 9.3,
    pts: 0,
    form: 0,
    team_shirt: '/shirt_1.svg'
  },
  {
    first_name: 'matuesh',
    last_name: 'Kurry',
    team: 'Poland',
    club: 'Polska',
    role: 'gk',
    price: 3.3,
    pts: 0,
    form: 0,
    team_shirt: '/shirt_1.svg'
  },

  {
    first_name: 'C',
    last_name: 'Czadoman',
    team: 'Polski',
    club: 'Lower silesia',
    role: 'for',
    price: 3.3,
    pts: 0,
    form: 0,
    team_shirt: '/shirt_1.svg'
  }
];

export async function GetPlayers(): Promise<Array<IPlayer>> {
  return Promise.resolve(MockedPlayers);
}
