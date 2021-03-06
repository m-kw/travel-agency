import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';

import styles from './OrderOption.scss';

const OrderOptionDropdown = ({ values, required, currentValue, setOptionValue }) => {
  return (
    <select
      className={styles.dropdown}
      value={currentValue}
      onChange={e => setOptionValue(e.currentTarget.value)}
    >
      {required ? '' : (
        <option key='null' value=''>---</option>
      )}
      {values.map(value => (
        <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option>
      ))}
    </select>
  );
};

OrderOptionDropdown.propTypes = {
  values: PropTypes.array,
  required: PropTypes.node,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDropdown;
