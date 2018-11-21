import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { toggleListItem } from './actions/listItemActions';
import reducer from './reducers/listReducer';
import * as constants from './constants';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('actions', () => {
  it('should create an action to toggle', () => {
    const payload = '1';
    const expectedAction = {
      type: constants.LIST_ITEM_TOGGLE,
      payload
    }
    expect(toggleListItem(payload)).toEqual(expectedAction)
  })
})

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      itemList: []
    })
  })

  it('should handle add items', () => {
    expect(
      reducer({}, {
        type: constants.SET_INITIAL_LIST_ITEM,
        payload: [
          {id: '1', name: '01 Layer', isActive: true},
          {id: '2', name: '01 Layer', isActive: false},
          {id: '3', name: '01 Layer', isActive: false}
        ]
      })
    ).toEqual({
      itemList: [
        {id: '1', name: '01 Layer', isActive: true},
        {id: '2', name: '01 Layer', isActive: false},
        {id: '3', name: '01 Layer', isActive: false}
      ]
    })
  })

  expect(
    reducer({
      loading: false,
      itemList: []
    }, {
      type: constants.SET_INITIAL_LIST_ITEM,
      payload: [
        {id: '1', name: '01 Layer', isActive: true},
        {id: '2', name: '01 Layer', isActive: false},
        {id: '3', name: '01 Layer', isActive: false}
      ]
    })
  ).toEqual({
    loading: false,
    itemList: [
      {id: '1', name: '01 Layer', isActive: true},
      {id: '2', name: '01 Layer', isActive: false},
      {id: '3', name: '01 Layer', isActive: false}
    ]
  })
})