import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "./Input";
import { ReactComponent as ShowIcon } from "../../assets/eye.svg";

const PasswordInputWrapper = styled.div`
  display: flex;
  box-shadow: 0 0 5px 2px
    ${(p) => (p.hover ? (p) => p.theme.secondaryColor : "none")};
  border-radius: 5px;

  &:hover {
    box-shadow: 0 0 5px 2px ${(p) => p.theme.secondaryColor};
  }

  ~ div {
    margin-bottom: 8px;
  }
`;

const PasswordInputStyles = styled(Input).attrs(() => ({
  type: "password",
  placeholder: "Password",
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid ${(p) => (p.hover ? (p) => p.theme.secondaryColor : "#ccc")};
  border-right: none;
  margin-bottom: 0;

  &:hover {
    box-shadow: none;
    border-right: none;
  }

  &:focus {
    border: 1px solid ${(p) => p.theme.secondaryColor};
    border-right: none;
    box-shadow: none;
  }
`;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid ${(p) => (p.hover ? (p) => p.theme.secondaryColor : "#ccc")};
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 11px 8px;
  border-left: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: white;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: black;
`;

const ShowIconStyled = styled(ShowIcon)`
  fill: ${(p) => (p.show ? "black" : "#ccc")};
`;

const PasswordInput = (props) => {
  const [show, setShow] = useState(true);
  const [hoverWrapper, setHoverWrapper] = useState(false);
  return (
    <>
      <PasswordInputWrapper
        onFocus={() => setHoverWrapper(true)}
        onBlur={() => setHoverWrapper(false)}
        hover={hoverWrapper}
      >
        <PasswordInputStyles {...props} hover={hoverWrapper} />
        <ToggleButton onClick={() => setShow(!show)} hover={hoverWrapper}>
          <ShowIconStyled show={show} />
        </ToggleButton>
      </PasswordInputWrapper>
      <div>{show ? props.value : ""}</div>
    </>
  );
};

export { PasswordInput };
