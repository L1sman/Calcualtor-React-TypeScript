import styled, { css } from 'styled-components';

const btnCommon = css`
  background: rgb(75, 77, 78);
  &:hover,
  &:focus-visible {
    background-color: #a8a5a5;
  }
  &:active {
    background-color: rgb(144, 145, 145);
  }
`;

const btnResult = css`
  grid-column: 5 / auto;
  grid-row: 4/6;
  background: rgb(254, 141, 14);
  &:hover,
  &:focus-visible {
    background-color: rgb(254 , 160 , 50);
  }
  &:active {
    background-color: rgb(190, 106, 11);
  }
`;

const btnNull = css`
  grid-column: 1/3;
  background: rgb(72, 72, 74);
  &:hover,
  &:focus-visible {
    background-color: #a8a5a5;
  }
`;

const getBtnStyle = (className: string) => {
  if (className === 'null') return btnNull;
  if (className === 'result') return btnResult;

  return btnCommon;
};
export const StyledButton = styled.button<{ className: string }>`
  ${({ className }) => css`${getBtnStyle(className)}`};
  width: 100%;
  height: 100%;
  font-size: 25px;
  color: white;
  outline: none;
  border: 0.5px solid black;
`;
