export type GenreValue =
  | 'Rock'
  | 'Kotimainen'
  | 'Svart-records'
  | 'Punk-hardcore'
  | 'Blues'
  | 'Jazz'
  | 'Funk-soul'
  | 'Heavy-metal'
  | 'Indie-alternative'
  | 'Rock-roll'
  | 'HipHop'
  | 'Electronic'
  | 'Folk-country'
  | 'Reggae'
  | 'Soundtrack'

export type GenreName =
  | 'Rock'
  | 'Kotimainen'
  | 'Svart Records'
  | 'Punk/ Hardcore'
  | 'Blues'
  | 'Jazz'
  | 'Funk/ Soul'
  | 'Heavy/Metal'
  | 'Indie/Alternative'
  | 'Rock and Roll'
  | 'Hip Hop'
  | 'Electronic'
  | 'Folk & Country'
  | 'Reggae'
  | 'Soundtrack'

export interface Genre {
  name: GenreName
  value: GenreValue
}

export const GENRES = [
  {
    name: 'Rock',
    value: 'Rock',
  },
  {
    name: 'Kotimainen',
    value: 'Kotimainen',
  },
  {
    name: 'Svart Records',
    value: 'Svart-records',
  },
  {
    name: 'Punk/ Hardcore',
    value: 'Punk-hardcore',
  },
  {
    name: 'Blues',
    value: 'Blues',
  },
  {
    name: 'Jazz',
    value: 'Jazz',
  },
  {
    name: 'Funk/ Soul',
    value: 'Funk-soul',
  },
  {
    name: 'Heavy/Metal',
    value: 'Heavy-metal',
  },
  {
    name: 'Indie/Alternative',
    value: 'Indie-alternative',
  },
  {
    name: 'Rock and Roll',
    value: 'Rock-roll',
  },
  {
    name: 'Hip Hop',
    value: 'HipHop',
  },
  {
    name: 'Electronic',
    value: 'Electronic',
  },
  {
    name: 'Folk & Country',
    value: 'Folk-country',
  },
  {
    name: 'Reggae',
    value: 'Reggae',
  },
  {
    name: 'Soundtrack',
    value: 'Soundtrack',
  },
]
