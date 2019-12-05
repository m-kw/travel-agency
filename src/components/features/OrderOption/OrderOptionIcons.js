import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';

import styles from './OrderOption.scss';

const OrderOptionIcons = ({ values, required, setOptionValue, currentValue }) => {
  return (
    <div className={styles.icon}>

      {required ? '' : (
        <div onChange={setOptionValue('')}>
          <Icon name='times-circle' /> none
        </div>
      )}

      {values.map(value => {
        console.log('value', value);
        return (
          <div className={currentValue ? styles.iconActive : styles.icon} key={value.id} onClick={() => setOptionValue(value.id)}>
            <Icon name={value.icon} />
            {value.name} {formatPrice(value.price)}
          </div>
        );
      })}

    </div>
  );
};

OrderOptionIcons.propTypes = {
  required: PropTypes.bool,
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionIcons;
