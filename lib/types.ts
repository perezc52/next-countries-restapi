export interface Name {
  common: string;
  official: string;
  nativeName: Record<string, { official: string; common: string }>;
}

export interface Currency {
  [key: string]: {
    name: string;
    symbol: string;
  };
}

export interface IDD {
  root: string;
  suffixes: string[];
}

export interface Translation {
  [key: string]: {
    official: string;
    common: string;
  };
}

export interface Demonym {
  eng: { f: string; m: string };
  fra: { f: string; m: string };
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side: string;
}

export interface Gini {
  [year: string]: number;
}

export interface Country {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currency;
  idd: IDD;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Record<string, string>;
  translations: Translation;
  latlng: [number, number];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: Demonym;
  flag: string;
  maps: Maps;
  population: number;
  gini: Gini;
  fifa: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
}
