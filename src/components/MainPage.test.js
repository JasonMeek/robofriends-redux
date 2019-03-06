import { shallow, mount, render } from 'enzyme';
import MainPage from './MainPage';
import React from 'react';

let wrapper;
beforeEach(()=>{
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false,
    }
    wrapper = shallow(<MainPage { ...mockProps } />)
});

it('renders Main Page', () => {
    expect(wrapper).toMatchSnapshot();
});

it('filters robots correctly', ()=> {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [
            {
                id: 3,
                name: 'John',
                email: 'john@gmail.com'
            }
        ],
        searchField: 'a',
        isPending: false,
    }
    const wrapper2 = shallow(<MainPage { ...mockProps2 } />)
    expect(wrapper2.instance().filteredRobots()).toEqual([]);
})