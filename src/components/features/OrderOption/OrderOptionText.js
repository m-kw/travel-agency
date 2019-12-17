import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({ setOptionValue, validateForm }) => {
  return (
    <div>
      <input
        type='text'
        id='text'
        className={styles.input}
        onChange={e => {
          setOptionValue(e.currentTarget.value);
          validateForm();
        }}
      />
    </div>
  );
};

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
  valid: PropTypes.bool,
  validateForm: PropTypes.func,
};

export default OrderOptionText;
