import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Message from './index';

test('Should render the index', () => {
  const wrapper = shallow(<Message name="test" />);

  expect(wrapper.props().children[0]).toEqual('Say hello to ');
  expect(wrapper.find(Link).props().children).toEqual('test');
});
