import { connect } from 'react-redux';
import TripListOptions from './TripListOptions';
import { getAllTags } from '../../../redux/tagsRedux';
import { getAllFilters, changeSearchPhrase, changeSearchDuration, addTags, removeTags } from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  changeSearchDuration: (type, value) => dispatch(changeSearchDuration(type, value)),
  addTags: (tag, checked) => dispatch(addTags(tag, checked)),
  removeTags: (tag, checked) => dispatch(removeTags(tag, checked)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
