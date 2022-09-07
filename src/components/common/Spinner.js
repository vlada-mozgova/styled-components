import styled, { keyframes } from "styled-components";

const rotation = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`;

const Spinner = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid ${(p) => p.theme.primaryColor};
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 20px auto;

  animation: ${rotation} 0.5s linear infinite;
`;

export { Spinner };
