import styled from 'styled-components';
export const StyledDisplay = styled.div`
  width: 100%;
  height: 100px;
  background-color: rgb(33, 35, 38);
  text-align: right;
  padding-right: 5px;
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