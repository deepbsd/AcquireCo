import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import {shallow, mount} from 'enzyme';

// smoke test
describe('<Header />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.length).toBe(1);
    });

})


