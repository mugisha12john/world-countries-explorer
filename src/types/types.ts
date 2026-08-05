export interface MapLinks {
  googleMaps: string;
  openStreetMaps: string;
}

export interface FlagImages {
  png: string;
  svg: string;
}

export interface Language {
  name: string;
  iso639_1?: string;
  iso639_2?: string;
  nativeName?: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Translations {
  br?: string;
  de?: string;
  es?: string;
  fa?: string;
  fr?: string;
  hr?: string;
  hu?: string;
  it?: string;
  ja?: string;
  nl?: string;
  pt?: string;
  [key: string]: string | undefined;
}

export interface RegionalBloc {
  acronym: string;
  name: string;
  otherNames?: string[];
  otherAcronyms?: string[];
}

export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  subregion: string;
  region: string;
  population: number;
  latlng: [number, number];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  flags: FlagImages;
  currencies: Currency[];
  languages: Language[];
  translations: Translations;
  flag: string;
  regionalBlocs: RegionalBloc[];
  cioc: string;
  independent: boolean;
  maps: MapLinks;
  populationDensity: number;
}
