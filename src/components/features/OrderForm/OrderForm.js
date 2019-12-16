import React, { useState } from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Row, Col }from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';

import pricing from '../../../data/pricing.json';
import settings from '../../../data/settings.js';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';

const validateForm = (valid, setValid) => {
  const textInputs = document.querySelectorAll('#text');

  textInputs.forEach(function() {
    if (textInputs[0].value !== '' && textInputs[1].value !== '') {
      setValid(true);
      console.log('isValid?', valid);
    } else {
      setValid(false);
      console.log('isValid?', valid);
    }
  });

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
  const [valid, setValid] = useState(false);
  return (
    <Row>
      {pricing.map((option) => (
        <Col md={4} key={option.id}>
          <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} {...valid}/>
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} options={options}/>
        <Button onClick={() => {
          validateForm(valid, setValid);
          if (valid === true) {
            console.log('validT', valid);
            sendOrder(options, tripCost, tripName, tripCountry, tripId);
          } else if (valid === false){
            console.log('validF', valid);
            console.log('empty fields');
          }
        }}>Order now!</Button>
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
  valid: PropTypes.bool,
};

export default OrderForm;
