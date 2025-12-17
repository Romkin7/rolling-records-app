export type CategoryName =
  | 'Uudet LP:t'
  | 'Tilattavat LP:t'
  | 'Tulevat LP:t'
  | 'Käytetyt LP:t'
  | 'Tarjous LP:t'
  | 'Uudet CD:t'
  | 'Tilattavat CD:t'
  | 'Tulevat CD:t'
  | 'Käytetyt CD:t'
  | 'Tarjous CD:t'
  | 'Uudet Kasetit'
  | 'Tulevat Kasetit'
  | 'Käytetyt Kasetit'
  | 'Tarjous Kasetit'
  | 'Uudet 7"'
  | 'Tilattavat 7"'
  | 'Tulevat 7"'
  | 'Käytetyt 7"'
  | 'Tarjous 7"'
  | 'Uudet 12"'
  | 'Tilattavat 12"'
  | 'Tulevat 12"'
  | 'Käytetyt 12"'
  | 'Tarjous 12"'
  | 'Lahjakortit'
  | 'Oheistarvikkeet'

export type CategoryValue =
  | 'Uudet'
  | 'Tilattavat'
  | 'Tulevat'
  | 'Käytetyt'
  | 'Tarjoukset'
  | 'Lahjakortit'
  | 'Oheistarvikkeet'

export interface Category {
  name: CategoryName
  category: CategoryValue
}

export const CATEGORIES: Category[] = [
  { name: 'Uudet LP:t', category: 'Uudet' },
  { name: 'Tilattavat LP:t', category: 'Tilattavat' },
  { name: 'Tulevat LP:t', category: 'Tulevat' },
  { name: 'Käytetyt LP:t', category: 'Käytetyt' },
  { name: 'Tarjous LP:t', category: 'Tarjoukset' },
  { name: 'Uudet CD:t', category: 'Uudet' },
  { name: 'Tilattavat CD:t', category: 'Tilattavat' },
  { name: 'Tulevat CD:t', category: 'Tulevat' },
  { name: 'Käytetyt CD:t', category: 'Käytetyt' },
  { name: 'Tarjous CD:t', category: 'Tarjoukset' },
  { name: 'Uudet Kasetit', category: 'Uudet' },
  { name: 'Tulevat Kasetit', category: 'Tulevat' },
  { name: 'Käytetyt Kasetit', category: 'Käytetyt' },
  { name: 'Tarjous Kasetit', category: 'Tarjoukset' },
  { name: 'Uudet 7"', category: 'Uudet' },
  { name: 'Tilattavat 7"', category: 'Tilattavat' },
  { name: 'Tulevat 7"', category: 'Tulevat' },
  { name: 'Käytetyt 7"', category: 'Käytetyt' },
  { name: 'Tarjous 7"', category: 'Tarjoukset' },
  { name: 'Uudet 12"', category: 'Uudet' },
  { name: 'Tilattavat 12"', category: 'Tilattavat' },
  { name: 'Tulevat 12"', category: 'Tulevat' },
  { name: 'Käytetyt 12"', category: 'Käytetyt' },
  { name: 'Tarjous 12"', category: 'Tarjoukset' },
  { name: 'Lahjakortit', category: 'Lahjakortit' },
  { name: 'Oheistarvikkeet', category: 'Oheistarvikkeet' },
]
