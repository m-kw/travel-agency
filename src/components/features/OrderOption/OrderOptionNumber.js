import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
//import { formatPrice } from '../../../utils/formatPrice';

const OrderOptionNumber = ({ currentValue, limits, setOptionValue }) => {
  return (
    <div className={styles.number}>
      <input
        type='number'
        className={styles.inputSmall}
        value={currentValue}
        min={limits.min}
        max={limits.max}
        onChange={e => setOptionValue(e.currentTarget.value)}
      />
    </div>
  );
};

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  limits: PropTypes.object,
  setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;
