import React from 'react';
//import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Row, Col }from 'react-flexbox-grid';
import PropTypes from 'prop-types';

const OrderForm = ({ tripCost, ...options }) => {
  return (
    <Row>
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} {...options}/>
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;
