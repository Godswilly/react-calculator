import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Button from '../components/Button';
import ButtonPanel from '../components/ButtonPanel';
import NavBar from '../components/NavBar';
import operate from '../logic/operate';
import calculate from '../logic/calculate';

configure({ adapter: new Adapter() });

it('returns the addition of two numbers', () => {
  const result = operate(5, 8, '+');
  expect(result).toEqual('13');
});

it('returns the subtraction of two numbers', () => {
  const result = operate(8, 5, '-');
  expect(result).toEqual('3');
});

it('returns the product of two digits', () => {
  const result = calculate({
    total: '8', next: '5', operation: 'x', totalCalc: true,
  }, '=');
  expect(result).toEqual({
    total: '40', next: null, operation: null, totalCalc: false,
  });
});

it('returns the division of two digits', () => {
  const result = calculate({
    total: '10', next: '5', operation: '÷', totalCalc: true,
  }, '=');
  expect(result).toEqual({
    total: '2', next: null, operation: null, totalCalc: false,
  });
});

it('contains 3 navbar links', () => {
  const links = shallow(<NavBar />).find('li').length;
  expect(links).toBe(3);
});

it('contains 19 button links', () => {
  const wrapper = shallow(<ButtonPanel clickHandler={jest.fn()} />).find(Button).length;
  expect(wrapper).toBe(19);
});
