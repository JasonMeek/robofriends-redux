import { shallow, mount, render } from 'enzyme';
import CardList from './CardList';
import React from 'react';

it('expect to render CardList component',()=>{
    const mockRobots = [
        {
            id: 1,
            name: 'Jack Snow',
            username: 'jack',
            email: 'jack@gmail.com'
        }
    ];
    const wrapper = shallow(<CardList robots={mockRobots} />);
    expect(wrapper).toMatchSnapshot();
})