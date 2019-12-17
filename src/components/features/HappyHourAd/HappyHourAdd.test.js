import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('renders title and countdown', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.find(select.title).exists()).toEqual(true);
    expect(component.find(select.promoDescription).exists()).toEqual(true);
  });
});
