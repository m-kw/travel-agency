import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOption = (props) => {
  console.log('props', props);
  return (
    <div className={styles.component}>
      <h3 className={styles.title}>{props.name}</h3>
    </div>
  );
};

OrderOption.propTypes = {
  name: PropTypes.string,
};

export default OrderOption;
