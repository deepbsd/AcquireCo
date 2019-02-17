import React from 'react';
import ReactDOM from 'react-dom';
import Page404 from './page404';
import {shallow, mount} from 'enzyme';

// smoke test
describe('<Page404 />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Page404 />);
        expect(wrapper.length).toBe(1);
    });

})


