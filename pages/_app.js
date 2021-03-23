import { ThemeProvider } from "styled-components";
import RacaWrapper from "../src/providers/Raca";
import GlobalStyle, { colors } from "../src/theme/GlobalStyles";

const theme = {
  colors,
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RacaWrapper>
          <GlobalStyle />
          <Component {...pageProps} />
        </RacaWrapper>
      </ThemeProvider>
    </>
  );
}
