import React from 'react';
import DaysToSummer from './DaysToSummer';
import { shallow } from 'enzyme';

const mockProps = {
  title: 'days to summer',
};

const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtDate = (date, expectedDescription) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T11:11:11.135Z`);

    const component = shallow(<DaysToSummer {...mockProps}/>);
    const renderedDays = component.find('.title').text();
    expect(renderedDays).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
});

describe('Component DaysToSummer with mocked Date', () => {
  checkDescriptionAtDate('2019-07-26', '');
  checkDescriptionAtDate('2019-06-21', '');
  checkDescriptionAtDate('2019-09-23', '');
});
