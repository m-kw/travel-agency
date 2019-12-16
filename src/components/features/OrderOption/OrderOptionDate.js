import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class OrderOptionDate extends React.Component {
  render() {
    const { currentValue, setOptionValue } = this.props;
    return (
      <DatePicker
        dateFormat='dd MMMM yyyy'
        selected={currentValue}
        onChange={setOptionValue}
      />
    );
  }
}

OrderOptionDate.propTypes = {
  currentValue: PropTypes.date,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
