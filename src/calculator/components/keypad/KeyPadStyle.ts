import styled from 'styled-components';

export const StyledKeyPad = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(5, 4rem);
  grid-template-columns: repeat(5, 4.35rem);
  justify-content: space-around;
`;
