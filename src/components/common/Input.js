import styled from "styled-components";

const Input = styled.input`
  outline: none;
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  font-family: initial;
  margin-bottom: 8px;
  width: 100%;
  height: 40px;
  box-sizing: border-box;

  &:hover {
    border: 1px solid ${(p) => p.theme.secondaryColor};
    box-shadow: 0 0 5px 2px ${(p) => p.theme.secondaryColor};
  }

  &:focus {
    border: 1px solid ${(p) => p.theme.secondaryColor};
    box-shadow: 0 0 5px 2px ${(p) => p.theme.secondaryColor};
  }
`;

export { Input };
