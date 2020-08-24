import styled, { css } from "styled-components";

export default styled.button`
  float: left;
  font-family: ${(props) => props.theme.font};
  font-size: 1.3rem;
  border: none;
  margin: 10px;
  padding: 7px 10px;
  ${(props) =>
    props.color &&
    css`
      background: ${(props) => props.theme[props.color]};
    `};
  color: #fff;
  &:hover {
    background-color: blue;
  }
`;
