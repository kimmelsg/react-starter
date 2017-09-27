import Index from './index';
import * as React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

test('Should render the index', () => {
  const wrapper = shallow(<Index name="test" />);

  expect(wrapper.props().children[0]).toEqual('Say hello to ');
  expect(wrapper.find(Link).props().children).toEqual('test');
});
