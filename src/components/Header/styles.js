import styled from "styled-components";

export const HeaderStyle = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.rosa};
`;

HeaderStyle.H1 = styled.h1`
  margin-bottom: 0;
  text-transform: uppercase;
  font-weight: bold;
`;

HeaderStyle.P = styled.p`
  margin: 0;
`;
