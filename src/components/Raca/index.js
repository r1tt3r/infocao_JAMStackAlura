import React from "react";
import RacaSelecionada from "../RacaSelecionada";
import RacaNaoSelecionada from "../RacaNaoSelecionada";
import { RacaContext } from "../../providers/Raca";

const Raca = () => {
  const racaContext = React.useContext(RacaContext);
  const racaFoiSelecionada = Boolean(racaContext.racas.racaSelecionada.name);

  return racaFoiSelecionada ? <RacaSelecionada /> : <RacaNaoSelecionada />;
};

export default Raca;
