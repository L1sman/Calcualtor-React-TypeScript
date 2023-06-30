import styled from 'styled-components';
export const StyledDisplay = styled.div`
  width: inherit;
  height: 100px;
  background-color: #1c1f20;
  border: 1px solid black;
  border-radius: 5px;
  text-align: right;
  margin-bottom: 2px;
`;
export const StyledDisplayHistory = styled.div`
  height: 40%;
  font-size: 12px;
  color: rgba(255, 255, 255, .5);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 5px;
  margin: 0;
`;

export const StyledDisplayResult = styled.input`
  height: 60%;
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 20px;
  color: white;
  text-align: right;
  padding: 0;
  margin: 0;
`;