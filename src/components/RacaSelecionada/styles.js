import styled from "styled-components";

export const RacaWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  border: 4px solid ${({ theme }) => theme.colors.rosa};
  border-radius: 5px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.rosaClaro};
  display: flex;
  flex-direction: column;

  &.invisivel {
    display: none;
  }
`;

RacaWrapper.H2 = styled.h2`
  margin: 0;
  background-color: ${({ theme }) => theme.colors.rosa};
  color: ${({ theme }) => theme.colors.branco};
  padding-top: 10px;
  font-size: 18px;
  font-weight: normal;
`;

RacaWrapper.Info = styled.p`
  background-color: ${({ theme }) => theme.colors.rosa};
  margin: 0;
  color: ${({ theme }) => theme.colors.branco};
  padding: 5px;
  font-size: 14px;
  &span {
    font-weight: bold;
  }
`;

RacaWrapper.Image = styled.img`
  max-width: 100%;
  min-width: 300px;
  max-height: 300px;
  object-fit: cover;
  flex-grow: 1;
`;
