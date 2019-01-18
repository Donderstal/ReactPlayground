import React from 'react';
import renderer from 'react-test-renderer';
import * as Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, configure } from 'enzyme';


import fillerComponent from '../src/components/fillerComponent';

configure({ adapter: new Adapter() });


test('testing fillerComponent...', () => {
     const tree = renderer.create(<fillerComponent />).toJSON();
      expect(tree).toMatchSnapshot();
});

describe('<fillerComponent> functions', () => {
    it('should be as I want it to', () => {
        const wrapper = shallow(<fillerComponent />);
        expect(wrapper.instance().fillerFunction(1 , )).equals(0.5);
    })
})