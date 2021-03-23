import React, { createContext } from "react";
import { buscaImagemPorRaca } from "../../components/api";

export const RacaContext = createContext();

export default function RacaWrapper({ children }) {
  const [racas, setRacas] = React.useState({
    racas: [],
    racaSelecionada: {},
    status: "Você ainda não selecionou nenhum cachorro :(",
  });

  const selecionaRaca = (raca) => {
    const infoSelecionada = racas.racas.filter(
      (infoRaca) => infoRaca.name === raca
    );

    buscaImagemPorRaca(raca)
      .then((imagem) =>
        setRacas({
          ...racas,
          racaSelecionada: {
            ...racas.racaSelecionada,
            imagem,
            ...infoSelecionada[0],
          },
          status:
            "A imagem sempre será diferente, pode clicar quantas vezes quiser!",
        })
      )
      .catch((erro) => {
        const eh404 = erro.response.status === 404;
        const mensagem = eh404
          ? "Não encontramos essa raça :("
          : "Oops, algo deu errado. Pode tentar novamente?";

        setRacas({ ...racas, status: mensagem });
      });
  };

  return (
    <RacaContext.Provider value={{ racas, setRacas, selecionaRaca }}>
      {children}
    </RacaContext.Provider>
  );
}
