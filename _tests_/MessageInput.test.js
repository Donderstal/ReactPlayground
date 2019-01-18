import React from 'react';
import renderer from 'react-test-renderer';


import MessageInput from '../src/components/MessageInput';


test('test if mInput renders', () => {
     const tree = renderer.create(<MessageInput />).toJSON();
      expect(tree).toMatchSnapshot();
});