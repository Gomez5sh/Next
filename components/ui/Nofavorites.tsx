import { Container, Image, Text } from "@nextui-org/react";

export const Nofavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 100px)",
        alignSelf: "center",
      }}
    >
      <Text h1>Sin favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/104.png"
        alt="Sin favoritos"
        width={250}
        height={250}
        css={{
          opacity: "0.1",
        }}
      />
    </Container>
  );
};
