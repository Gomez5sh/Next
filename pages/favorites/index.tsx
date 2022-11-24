import { Card, Grid, Image } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { Layout } from "../../components/layouts";
import { Nofavorites, Favoritepokemons } from "../../components/ui";
import { localfavorites } from "../../utils";

const FavoritePage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  useEffect(() => {
    setFavoritePokemons(localfavorites.pokemos);
  }, []);

  return (
    <Layout title="Mis pokemons favoritos">
      {favoritePokemons.length === 0 ? (
        <Nofavorites />
      ) : (
        <Favoritepokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritePage;
