import React from "react";
import { buscaSobreRacas, buscaTodasRacas } from "../src/components/api";
import Header from "../src/components/Header";
import ListaRacas from "../src/components/ListaRacas";
import Raca from "../src/components/Raca";
import { RacaContext } from "../src/providers/Raca";

export default function Home({ racas }) {
  const racaContext = React.useContext(RacaContext);

  React.useEffect(() => {
    racaContext.setRacas({ ...racaContext.racas, racas });
  }, []);

  return (
    <>
      <Header />
      <Raca />
      <ListaRacas />
    </>
  );
}

export async function getStaticProps() {
  const allDogs = await buscaSobreRacas();
  const allRacas = await buscaTodasRacas();

  const listaRacasMostradas = allDogs.filter((sobre) =>
    allRacas.includes(sobre.name.toLowerCase())
  );

  return {
    props: {
      racas: listaRacasMostradas,
    },
  };
}
