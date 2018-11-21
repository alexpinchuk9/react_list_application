import React, { Component } from 'react'
import styled from 'styled-components';

export default class ListDott extends Component {
  render() {
    const { isActive } = this.props;
    return (
      <DottWrapper isActive={isActive} />
    )
  }
}

const DottWrapper = styled.div`
  width: 20px;
  min-width: 20px;
  height: 20px;
  border: solid 2px #4a4a4a;
  border-radius: 50%;
  background: ${props => props.isActive ? '#4a4a4a' : 'transparent'}
`;