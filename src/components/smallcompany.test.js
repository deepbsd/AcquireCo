import React from 'react';
import ReactDOM from 'react-dom';
import SmallCompany from './smallcompany';
import {shallow, mount} from 'enzyme';

// smoke test
describe('<SmallCompany />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<SmallCompany />);
        expect(wrapper.length).toBe(1);
    });

})


