import React from 'react'

import styled from 'styled-components';
import { layout } from 'styled-system'

import theme from '../theme';

const StyledBurger = styled.button`
  position: absolute;
  top: ${theme.space[5]}px;
  left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  ${layout};
  transform: scale(0.8);
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${theme.colors.black};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;


export default function Burger(props) {
  return (
    <StyledBurger {...props}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}
