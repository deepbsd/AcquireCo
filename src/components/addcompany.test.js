import React from 'react';
import ReactDOM from 'react-dom';
import AddCompany from './addcompany';
import {shallow, mount} from 'enzyme';

// smoke test
describe('<AddCompany />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<AddCompany />);
        expect(wrapper.length).toBe(1);
    });

})

