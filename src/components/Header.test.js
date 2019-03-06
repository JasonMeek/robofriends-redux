import { shallow, mount, render } from 'enzyme';
import Header from './Header';
import React from 'react';

it('expect to render the Header component', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
})