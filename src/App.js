import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';

import ListContainer from './components/ListContainer';

export const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ListContainer />
      </Provider>
    );
  }
}

export default App;
