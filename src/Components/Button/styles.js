import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border: 1px solid gray;
  background-color: #0000f0;
  color: white;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  flex: 1;

  &:hover {
    opacity: 0.6;
    transition: ease-in 0.25s;
  }
`;
