'use strict';

import React from 'react';
import renderer from 'react-test-renderer';
import HelloMessage from '../hello_message'

it('renders HelloMessage correctly', () => {
  const tree = renderer.create(<HelloMessage name="world" />).toJSON();
  expect(tree).toMatchSnapshot();
});
