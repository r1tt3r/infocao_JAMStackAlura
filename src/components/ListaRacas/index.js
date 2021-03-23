import React from "react";
import { RacaContext } from "../../providers/Raca";
import { Li, Ul } from "./styles";

const ListaRacas = () => {
  const racaContext = React.useContext(RacaContext);
  const racas = racaContext.racas.racas;

  return (
    <Ul>
      {racas &&
        racas.map((raca) => (
          <Li
            key={raca.id}
            onClick={() => racaContext.selecionaRaca(raca.name)}
          >
            {raca.name}
          </Li>
        ))}
    </Ul>
  );
};

export default ListaRacas;
