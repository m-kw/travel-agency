import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if (checked) {
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({ values, currentValue, setOptionValue }) => {
  return(
    <div className={styles.checkboxes}>
      {values.map(value => (
        <label key={value.id}>
          <input
            value={value.id}
            type='checkbox'
            onChange={e => {
              setOptionValue(newValueSet(currentValue, value.id, e.currentTarget.checked));
            }}
          />{value.name} {formatPrice(value.price)}
        </label>
      ))}
    </div>
  );
};
OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  price: PropTypes.string,
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
};

export default OrderOptionCheckboxes;
