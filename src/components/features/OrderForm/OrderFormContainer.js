import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';

const mapStateToProps = state => {
  return {
    options: getOrderOptions(state),
    valid: state.validForm,
  };
};

const mapDispatchToProps = dispatch => ({
  setOrderOption: option => dispatch(setOrderOption(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
