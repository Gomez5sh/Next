import Nextlink from "next/link";
import { Spacer, Text, useTheme, Image, Link } from "@nextui-org/react";

export const Nabvar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: "#111111",
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
        alt="Icono de la app"
        width={70}
        height={70}
      />
      <Nextlink href="/" passHref>
        <Link>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okémon
          </Text>
        </Link>
      </Nextlink>
      <Spacer css={{ flex: 1 }} />
      <Nextlink href="/favorites" passHref>
        <Link>
          <Text color="white" h3>
            Favoritos
          </Text>
        </Link>
      </Nextlink>
    </div>
  );
};
