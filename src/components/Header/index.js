import React from "react";
import { RacaContext } from "../../providers/Raca";
import Status from "../Status";
import { HeaderStyle } from "./styles";

const Header = () => {
  const racaContext = React.useContext(RacaContext);

  return (
    <HeaderStyle>
      <HeaderStyle.H1>Seja bem-vindo ao InfoCão</HeaderStyle.H1>
      <HeaderStyle.P>
        Clique em um nome e te daremos informações úteis sobre a raça e uma
        imagem bem bonita.
      </HeaderStyle.P>
      <Status status={racaContext.racas.status} />
    </HeaderStyle>
  );
};

export default Header;
