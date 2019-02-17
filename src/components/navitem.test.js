import React from 'react';
import ReactDOM from 'react-dom';
import NavItem from './navitem';
import {shallow, mount} from 'enzyme';

// smoke test
describe('<NavItem />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<NavItem />);
        expect(wrapper.length).toBe(1);
    });

})


