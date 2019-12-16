import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({ setOptionValue }) => {
  return (
    <div>
      <input
        type='text'
        id='text'
        className={styles.input}
        onChange={e => {
          setOptionValue(e.currentTarget.value);
        }}
      />
    </div>
  );
};

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
  valid: PropTypes.bool,
};

export default OrderOptionText;
