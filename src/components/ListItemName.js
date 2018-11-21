import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import edit from '../assets/images/common/edit.png';
import { fetchEditListItem } from '../actions/listItemActions';

class ListItemName extends Component {

  state={
    isEditing: false,
    name: this.props.item.name,
  }

  componentDidMount() {
    window.addEventListener('keypress', this.pressHandler)
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.pressHandler);
  }

  pressHandler = (e) => {
    const { isEditing } = this.state;
    // complete editing with Enter button
    if(isEditing && e.keyCode === 13) this.editItem(e);
  }

  changeHandler = (e) => {
    this.setState({name: e.target.value});
  }

  editItem = (e) => {
    const { item } = this.props;
    const { isEditing, name } = this.state;
    e.stopPropagation(); // prevent item toggle

    if(!isEditing) return this.setState({isEditing: true}); // close editing mode if active

    this.setState({isEditing: false});
    if(name.trim()) {
      this.props.fetchEditListItem({id: item.id, name: name.trim()});
    } else {
      this.setState({name: this.props.item.name}); // prevent sending empty name
    }
  }

  render() {
    const { item } = this.props;
    const { isEditing, name } = this.state;
    return (
      isEditing ?
        <NameStyled onClick={(e) => e.stopPropagation()}>
          <InputNameStyled
            type="text"
            autoFocus
            value={name}
            onChange={this.changeHandler}
            onBlur={(e) => this.editItem(e)}
          />
        </NameStyled>
        :
        <NameStyled>
          {item.name}
          <EditStyled src={edit} alt="" onClick={(e) => this.editItem(e)} />
        </NameStyled>
    )
  }
}

const InputNameStyled = styled.input`
  font-size: 20px;
  color: #4a4a4a;
  outline: none;
`;

const NameStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 0 25px;
  flex-grow: 1;
  font-size: 20px;
  font-weight: 300;
  color: #4a4a4a;
`;

const EditStyled = styled.img`
  width: 25px;
  height: 25px;
  padding: 15px;
`;

function mapDispatchToProps(dispatch) {
  return {
    fetchEditListItem: (data) => {
      dispatch(fetchEditListItem(data));
    }
  }
}

export default connect(null, mapDispatchToProps)(ListItemName)