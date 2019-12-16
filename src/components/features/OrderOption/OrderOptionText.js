import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({ currentValue, setOptionValue }) => {
  return (
    <div>
      <input
        type='text'
        className={styles.input}
        onChange={e => setOptionValue(e.currentTarget.value)}
        value={currentValue}
      />
    </div>
  );
};

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionText;
