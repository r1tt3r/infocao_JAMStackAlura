import React from "react";
import styled from "styled-components";
import { colors } from "../../theme/GlobalStyles";

const StatusDescription = styled.p`
  background-color: ${colors.branco};
  padding: 10px;
  display: inline-block;
  font-weight: bold;
  box-shadow: 0 0 8px rgba(${colors.rosaClaro}, 0.5);
`;

const Status = ({ status }) => <StatusDescription>{status}</StatusDescription>;

export default Status;
