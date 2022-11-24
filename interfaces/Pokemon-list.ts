export interface PokemonListResponse {
  count: number;
  next?: string;
  previous?: string;
  results: smallPokemon[];
}

export interface smallPokemon {
  id: number;
  img: string;
  name: string;
  url: string;
}
