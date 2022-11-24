import Head from "next/head";
import { FC } from "react";
import { Nabvar } from "../ui";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const origin =
  typeof window !== "undefined" ? window.location.origin : undefined;

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="Author" content="Emmanuel Gomez" />
        <meta
          name="Description"
          content={`Informacion de el pokemon: ${title}`}
        />
        <meta
          name="keywords"
          content={`${title}, Pokemon, Pokedex, quien es este pokemon ${title}`}
        />
        <meta property="og:title" content={`${title} information`} />
        <meta property="og:description" content={`${title} page`} />
        <meta
          property="og:image"
          content={`${origin}/images/baner.webp`}
        />
      </Head>

      <Nabvar />
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
