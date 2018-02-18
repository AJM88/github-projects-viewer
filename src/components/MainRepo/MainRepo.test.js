import React from 'react';
import { shallow } from 'enzyme';
import MainRepo from '../MainRepo';

it('renders without crashing', () => {
  shallow(<MainRepo name="test" />);
});
