import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import {shallow, mount} from 'enzyme';

// smoke test
describe('<Main />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Main />);
        expect(wrapper.length).toBe(1);
    });

})


