import React from "react";
import { RacaContext } from "../../providers/Raca";
import { RacaWrapper } from "./styles";

const RacaSelecionada = () => {
  const racaContext = React.useContext(RacaContext);
  return (
    <RacaWrapper>
      <RacaWrapper.H2>{racaContext.racas.racaSelecionada.name}</RacaWrapper.H2>
      <RacaWrapper.Info>
        <span>Tempo de vida:</span>
        {racaContext.racas.racaSelecionada.life_span}
      </RacaWrapper.Info>
      <RacaWrapper.Image
        alt="Imagem de raca"
        src={racaContext.racas.racaSelecionada.imagem}
      />
    </RacaWrapper>
  );
};

export default RacaSelecionada;
