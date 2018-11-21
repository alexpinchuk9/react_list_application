import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchAddNewListItem } from '../actions/listItemActions';

class AddListItemButton extends Component {
  render() {
    return (
      <WrapperStyled onClick={this.props.fetchAddNewListItem}>
        New item
      </WrapperStyled>
    )
  }
}

const WrapperStyled = styled.div`
  margin: 10px 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 65px;
  font-size: 20px;
  color: #4a4a4a;
  border: solid 2px #d8d8d8;
  :hover {
    background: #d8d8d8;
    cursor: pointer;
  }
`;

export default connect(null, {fetchAddNewListItem})(AddListItemButton)