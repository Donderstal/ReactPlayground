import React from 'react';
import renderer from 'react-test-renderer';


import StatusDisplay from '../src/components/StatusDisplay';


test('test if sDisplay renders', () => {
     const tree = renderer.create(<StatusDisplay />).toJSON();
      expect(tree).toMatchSnapshot();
});