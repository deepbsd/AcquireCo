import React from 'react';
import ReactDOM from 'react-dom';
import EditCompany from './editcompany';
import {shallow, mount} from 'enzyme';

// smoke test
describe('<EditCompany />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<EditCompany />);
        expect(wrapper.length).toBe(1);
    });

})

