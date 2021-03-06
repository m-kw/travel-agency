import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Row, Col }from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';

import pricing from '../../../data/pricing.json';
import settings from '../../../data/settings.js';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';

const validateForm = (options, tripCost, tripName, tripCountry, tripId) => {
  const textInputs = document.querySelectorAll('#text');
  const inputArray = Array.from(textInputs);

  const isValid = inputArray.every(input => input.value !== '');

  isValid ? sendOrder(options, tripCost, tripName, tripCountry, tripId) : null;

};

const sendOrder = (options, tripCost, tripName, tripCountry, tripId) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
    tripCountry,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response) {
      return response.json();
    })
    .then(function(parsedResponse) {
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({ tripCost, setOrderOption, options, tripName, tripCountry, tripId }) => {
  return (
    <Row>
      {pricing.map((option) => (
        <Col md={4} key={option.id}>
          <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} valid={validateForm}/>
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options}/>
        <Button onClick={() => validateForm(options, tripCost, tripName, tripCountry, tripId)}>Order now!</Button>
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  tripCountry: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
