import styled from "styled-components";

import { spacing, rounded, clrBg2, elevation, transition } from "utilities";

export const Card = styled.section`
  --bg: ${clrBg2};

  padding: ${spacing.lg};
  margin: ${spacing.md} 0;
  border-radius: ${rounded};
  background: var(--bg);
  ${elevation[3]};
  ${transition({ prop: "box-shadow" })};

  &:hover {
    ${elevation[4]};
  }
`;
