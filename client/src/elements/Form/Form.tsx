import styled from "styled-components";

import { rounded, clrBg, spacing } from "utilities";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > * {
    margin: ${spacing.xs} 0;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;

  > button {
    width: 100%;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: ${rounded};
  background: ${clrBg};
  padding: ${spacing.sm};
`;
