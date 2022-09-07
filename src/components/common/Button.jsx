import styled from "styled-components";

const Button = styled.button`
  color: white;
  background: #f8049c;
  font-weight: bold;
  padding: 8px;
  border-radius: 5px;
  box-shadow: none;
  border: none;
  font-size: 1em;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export { Button };
