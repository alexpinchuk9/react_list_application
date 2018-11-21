import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import ListDott from './common/ListDott';
import RemoveListItemButton from './RemoveListItemButton';

import ListItemName from './ListItemName';

import { toggleListItem } from '../actions/listItemActions';

class ListItem extends Component {

  toggleItem = () => {
    const { item } = this.props;
    this.props.toggleListItem(item.id);
  }

  render() {
    const { item } = this.props;
    
    return (
      <WrapperStyled onClick={this.toggleItem}>
        <ListDott isActive={item.isActive} />

        <ListItemName item={item} />

        <RemoveListItemButton id={item.id} />
      </WrapperStyled>
    )
  }
}

const WrapperStyled = styled.div`
  padding: 0 15px 0 30px;
  height: 65px;
  border-left: solid 2px #d8d8d8;
  border-right: solid 2px #d8d8d8;
  border-bottom: solid 2px #d8d8d8;
  display: flex;
  align-items: center;
  :nth-child(1) {
    border-top: solid 2px #d8d8d8;
  }
  :hover {
    background: #d8d8d8;
    cursor: pointer;
  }
`;

function mapDispatchToProps(dispatch) {
  return {
    toggleListItem: (id) => {
      dispatch(toggleListItem(id));
    }
  }
}

export default connect(null, mapDispatchToProps)(ListItem)