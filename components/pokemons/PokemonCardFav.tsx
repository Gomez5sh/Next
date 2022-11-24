import { Card, Image, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

interface PropsPokemonCardFav {
  pokemonID: number;
}

export const PokemonCardFav = ({ pokemonID }: PropsPokemonCardFav) => {
  const router = useRouter();
  const onFavoriteCliked = () => {
    router.push(`pokemon/${pokemonID}`);
  };
  return (
    <Grid
      key={pokemonID}
      xs={6}
      sm={3}
      md={1}
      xl={1}
      onClick={onFavoriteCliked}
    >
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`}
          alt="imagenes de pokemons en favoritos"
          width="100%"
          height="140px"
        />
      </Card>
    </Grid>
  );
};
