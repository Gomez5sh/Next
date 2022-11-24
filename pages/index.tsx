import type { NextPage } from "next";
import { Layout } from "../components/layouts";
import { GetStaticProps } from "next";
import { pokeApi } from "../api";
import { PokemonListResponse, smallPokemon } from "../interfaces/index";
import { Grid } from "@nextui-org/react";
import PokemonCard from "../components/pokemons/PokemonCard";

interface Props {
  pokemons: smallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listados de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map(({ id, name, img }) => (
          <Grid key={id} xs={6} sm={3} md={2} xl={1}>
            <PokemonCard key={id} id={id} name={name} img={img} />
          </Grid>
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: smallPokemon[] = data.results.map((item, index) => ({
    ...item,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));
  return {
    props: {
      pokemons: pokemons,
    },
  };
};

export default Home;
