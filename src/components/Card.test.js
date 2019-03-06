import { shallow, mount, render } from 'enzyme';
import Card from './Card';
import React from 'react';

it('expect to render Card component',()=>{
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
})
