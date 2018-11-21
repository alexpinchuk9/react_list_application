import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import trash from '../assets/images/common/trash.png';
import { fetchRemoveListItem } from '../actions/listItemActions';

class RemoveListItemButton extends Component {

  state={
    isDialogOpen: false
  }

  // open/close remove diaolg
  toggleDialog = (e, value) => {
    e.stopPropagation(e); // prevent item toggle
    this.setState({isDialogOpen: value})
  }

  // attempt to remove item
  removeItem = (e) => {
    const { id } = this.props;
    e.stopPropagation(); // prevent item toggle
    this.props.fetchRemoveListItem(id);
  }

  render() {
    const { isDialogOpen } = this.state;
    return (
      <div>
        <TrashStyled src={trash} alt="" onClick={(e) => this.toggleDialog(e, true)} />
        {
          isDialogOpen ?
            <DialogStyled onClick={(e) => this.toggleDialog(e, false)}>
              <TitleStyled>Are you sure?</TitleStyled>
              <ButtonWrapper>
                <ButtonStyled color={'green'} onClick={(e) => this.removeItem(e)}>yes</ButtonStyled>
                <ButtonStyled color={'red'}>no</ButtonStyled>
              </ButtonWrapper>
            </DialogStyled>
            :
            null
        }
      </div>
    )
  }
}

const TrashStyled = styled.img`
  width: 22px;
  height: 28px;
  padding: 15px;
`;

const DialogStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgba(216,216,216,0.7);
`;

const TitleStyled = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin: 125px 0 15px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonStyled = styled.div`
  margin: 0 10px;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 65px;
  border: solid 2px ${props => props.color};
  border-radius: 2px;
  color: #fff;
  background: ${props => props.color};
`;

export default connect(null, {fetchRemoveListItem})(RemoveListItemButton)