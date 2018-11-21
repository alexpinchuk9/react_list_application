import React, { Component } from 'react'
import styled from 'styled-components';

export default class Loader extends Component {
  render() {
    return (
      <LoaderWrapperStyled>
        <LoaderStyled>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </LoaderStyled>
      </LoaderWrapperStyled>
    )
  }
}

const LoaderWrapperStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  font-weight: 600;
  background: rgba(216,216,216,0.7);
`;

const LoaderStyled = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  & > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid #000;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #000 transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;