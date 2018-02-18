import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Home from '../Home';

const mockStore = configureStore();

it('renders without crashing', () => {
  const initialState = {};
  const store = mockStore(initialState);
  const context = {store};

  shallow(<Home />, {context});
});
