import styled, { css } from 'styled-components';

const btnCommon = css`
  width: 60px;
  height: 60px;
  background: rgb(72, 72, 74);
`;

const btnResult = css`
  width: 60px;
  height: 100%;
  grid-column: 5 / auto;
  grid-row: 4/6;
  background: rgb(254, 141, 14);
`;

const btnNull = css`
  width: 100%;
  height: 60px;
  grid-column: 1/3;
  background: rgb(72, 72, 74);
`;

const getBtnStyle = (className: string) => {
  if (className === 'null') return btnNull;
  if (className === 'result') return btnResult;

  return btnCommon;
};
export const StyledButton = styled.button<{ className: string }>`
  ${({ className }) => getBtnStyle(className)};
  border: 1px solid black;
  outline: none;
  border-radius: 10px;
  font-size: 25px;
  color: white;
  
  &:hover,
  &:focus-visible {
    background-color: #a8a5a5;
  }
  
`;
