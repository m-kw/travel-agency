import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({ setOptionValue, required }) => {
  return (
    <div>
      <input
        type='text'
        className={styles.input}
        onChange={e => setOptionValue(e.currentTarget.value)}
        required={required}
      />
    </div>
  );
};

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  register: PropTypes.func,
  required: PropTypes.bool,
};

export default OrderOptionText;
