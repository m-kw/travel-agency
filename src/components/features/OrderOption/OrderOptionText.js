import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({ setOptionValue }) => {
  return (
    <div>
      <input
        type='text'
        className={styles.input}
        onChange={e => setOptionValue(e.currentTarget.value)}
        isRequired
      />
    </div>
  );
};

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
