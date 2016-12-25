import {connect} from 'react-redux'
import {setSearchString} from '../actions/filters';
import SearchTextField from '../components/SearchTextField';

const SearchTextFieldContainer = connect(
  state => ({
    searchString: state.filters.searchString
  }),
  dispatch => ({
    setSearchString: (newSearchString) => dispatch(setSearchString(newSearchString))
  })
)(SearchTextField);

export default SearchTextFieldContainer;
