import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding-inline-start: 0;
  padding: 20px;
`;
export const Li = styled.li`
  background-color: ${({ theme }) => theme.colors.rosa};

  border: 2px solid ${({ theme }) => theme.colors.rosaClaro};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.branco};
  cursor: pointer;
  flex-grow: 1;
  margin: 10px;
  padding: 15px;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.rosaClaro};
    color: ${({ theme }) => theme.colors.rosa};
  }
`;
