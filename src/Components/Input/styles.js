import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: #aaaaff;

  display: flex;
  flex-direction: row-reverse;

  font-size: 24px;
  font-family: 'Roboto', sans-serif;

  input {
    width: 100%;
    height: 75px;
    background-color: #aaaaff;
    border: 0;
    padding: 0 10px;
    cursor: not-allowed;
    color: #ffffff;
    font-size: 24px;
    text-align: end;

    &:focus {
      outline: none;
    }
  }
`;
