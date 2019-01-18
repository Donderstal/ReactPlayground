import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, configure } from 'enzyme';
import { Text } from 'react-native'

import MessageInput from '../src/components/MessageInput'

import Line from '../src/components/Line';
import fillerComponent from '../src/components/fillerComponent';

Enzyme.configure({ adapter: new Adapter() });


test('testing fillerComponent...', () => {
    const AAARGH = shallow(<fillerComponent />)
        console.log(typeof shallow())
     const tree = renderer.create(<fillerComponent />).toJSON();
      expect(tree).toMatchSnapshot();
});

describe('<fillerComponent> functions', () => {
    it('should be as I want it to', () => {
        const wrapper = shallow(<Text />);
        console.log(wrapper)
    })
})