import React from 'react';
import ReactDOM from 'react-dom';
import Listpage from './listpage';
import {shallow, mount} from 'enzyme';

// smoke test
describe('<Listpage />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Listpage />);
        expect(wrapper.length).toBe(1);
    });

})


