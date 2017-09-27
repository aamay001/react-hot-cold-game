import React from 'react';
import {shallow, mount} from 'enzyme';

import Controller from './Controller';

describe('<Controller />', () => {
  it('Renders without crashing', () => {
    shallow(<Controller />);
  });
});