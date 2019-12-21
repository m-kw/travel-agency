import React from 'react';
import DaysToSummer from './DaysToSummer';
import { shallow } from 'enzyme';

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
});
