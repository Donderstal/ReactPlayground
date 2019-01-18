import React from 'react';
import renderer from 'react-test-renderer';


import MessagesDisplay from '../src/components/MessagesDisplay';


test('test if mDisplay renders', () => {
     messages = ['Hey', 'this', 'is', 'a', 'test']
     const tree = renderer.create(<MessagesDisplay messages={messages}/>).toJSON();
      expect(tree).toMatchSnapshot();
});