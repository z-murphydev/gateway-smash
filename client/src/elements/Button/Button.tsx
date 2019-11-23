import styled from "styled-components";

import {
  spacing,
  clrAccent,
  clrAccent2,
  transition,
  rounded,
  white
} from "utilities";

export const Button = styled.button`
  --bg: ${clrAccent};

  cursor: pointer;
  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${rounded};
  background: var(--bg);
  color: ${white};
  ${transition({ prop: "background" })};

  &:hover {
    --bg: ${clrAccent2};
  }
`;
