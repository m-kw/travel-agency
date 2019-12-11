import React from 'react';
import { shallow } from 'enzyme';
import Hero from './Hero';

describe('Component Hero', () => {
  it('should render without crashing', () => {
    //const component = shallow(<Hero  />);
    const component = shallow(<Hero titleText='Lorem ipsum' />);
    expect(component).toBeTruthy();
    console.log(component.debug);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<Hero />)).toThrow();
  });

  it('should render correct title', () => {
    const expectedTitle = 'Lorem ipsum';
    const component = shallow(<Hero titleText={expectedTitle} />);

    const renderedTitle = component.find('.title').text();
    expect(renderedTitle).toEqual(expectedTitle);
  });
});
