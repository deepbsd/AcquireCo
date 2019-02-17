import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './landing';
import {shallow, mount} from 'enzyme';

// smoke test
describe('<Landing />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Landing />);
        expect(wrapper.length).toBe(1);
    });

})


