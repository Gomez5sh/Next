import { Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

interface PropsPokemonCard {
  name: string;
  img: string;
  id: number;
}

const PokemonCard = ({ id, name, img }: PropsPokemonCard) => {
  const router = useRouter();
  const onPokemonClick = () => {
    router.push(`pokemon/${id}`);
  };
  return (
    <Card isHoverable isPressable onClick={onPokemonClick}>
      <Card.Body css={{ p: 1 }}>
        <Card.Image src={img} width="100%" height={140} />
      </Card.Body>
      <Card.Footer>
        <Row justify="space-between">
          <Text transform="capitalize">{name}</Text>
          <Text>{id}</Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default PokemonCard;
