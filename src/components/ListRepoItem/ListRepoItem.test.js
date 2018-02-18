import React from 'react';
import { shallow } from 'enzyme';
import ListRepoItem from '../ListRepoItem';

it('renders without crashing', () => {
  shallow(<ListRepoItem
    id={1}
    name="test"
    watchers={4}
    created="2018-02-01"
    updated="2018-02-10"
    onClick={() => {}}
  />);
});
