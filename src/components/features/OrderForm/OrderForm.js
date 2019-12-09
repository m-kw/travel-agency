import React from 'react';
//import styles from './OrderForm.scss';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Row, Col }from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({ tripCost, setOrderOption, ...options }) => {
  return (
    <Row>
      {pricing.map((option) => (
        <Col md={4} key={option.id}>
          <OrderOption {...option} currentValue={options.options[option.id]} setOrderOption={setOrderOption}/>
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} {...options}/>
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
