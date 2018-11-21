import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';

import ListItem from './ListItem';
import AddListItemButton from './AddListItemButton';
import Loader from './common/Loader';

import { fetchInitialListItem } from '../actions/listItemActions';

class ListContainer extends Component {

  componentDidMount() {
    this.props.fetchInitialListItem();
  }

  renderItems = () => {
    const { itemList } = this.props;
    
    if(itemList.length === 0) return null;

    const parsedItemList = itemList.map((item) => {
      return (
        <ListItem key={item.id} item={item} />
      );
    })

    return parsedItemList;
  }

  render() {
    const { loading } = this.props;
    return (
      <ContainerStyled>
        {this.renderItems()}
        <AddListItemButton />
        {
          loading ?
            <Loader />
            :
            null
        }
      </ContainerStyled>
    )
  }
}

const ContainerStyled = styled.div`
  margin: 10px auto 0;
  width: 100%;
  max-width: 525px;
  
`;

const mapStateToProps = state => {
    const { itemList, loading } = state.listReducer;

    return (
        { itemList, loading }
    );
}

function mapDispatchToProps(dispatch) {
  return {
    fetchInitialListItem: () => {
      dispatch(fetchInitialListItem());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)