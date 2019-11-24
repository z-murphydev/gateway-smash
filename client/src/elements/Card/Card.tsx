import styled, { css } from "styled-components";

import {
  spacing,
  rounded,
  clrBg2,
  elevation,
  transition,
  success,
  danger,
  white
} from "utilities";

export const Card = styled.section<{ success?: boolean; danger?: boolean }>`
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

  ${props =>
    (props.success || props.danger) &&
    css`
      box-shadow: none;
      &:hover {
        box-shadow: none;
      }
    `}

    ${props =>
      props.success &&
      css`
        --bg: ${success};
      `}
    
    ${props =>
      props.danger &&
      css`
        --bg: ${danger};
        color: ${white};
      `}
`;
