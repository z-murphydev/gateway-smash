import styled from "styled-components";

import { spacing, clrAccent, clrAccent2, transition, rounded } from "utilities";

export const Button = styled.button`
  --bg: ${clrAccent};

  padding: ${spacing.sm} ${spacing.md};
  border-radius: ${rounded};
  background: var(--bg);
  ${transition({ prop: "background" })};

  &:hover {
    --bg: ${clrAccent2};
  }
`;
