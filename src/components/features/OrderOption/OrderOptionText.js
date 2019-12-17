import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({ setOptionValue, valid }) => {
  return (
    <div>
      <input
        type='text'
        id='text'
        className={styles.input}
        onChange={e => {
          setOptionValue(e.currentTarget.value);
          valid;
        }}
      />
    </div>
  );
};

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
  valid: PropTypes.func,
};

export default OrderOptionText;
