import { PokemonCardFav } from "../pokemons";
import { useRouter } from "next/router";
import { Grid } from "@nextui-org/react";

interface Propspokemons {
  pokemons: number[];
}

export const Favoritepokemons = ({ pokemons }: Propspokemons) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <PokemonCardFav key={id} pokemonID={id} />
      ))}
    </Grid.Container>
  );
};
