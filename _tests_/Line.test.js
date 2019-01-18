// __tests__/Intro-test.js
import React from 'react';
import renderer from 'react-test-renderer';

import Line from '../src/components/Line';

test('renders correctly', () => {
  const tree = renderer.create(<Line />).toJSON();
  expect(tree).toMatchSnapshot();
});