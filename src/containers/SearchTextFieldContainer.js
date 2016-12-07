import {connect} from 'react-redux'
import {setSearchString} from '../actions/filters';
import SearchTextField from '../components/SearchTextField';

const mapStateToProps = (state) => {
  return {
    searchString: state.filters.searchString
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (newSearchString) => dispatch(setSearchString(newSearchString)),
    drop: () => dispatch(setSearchString(''))
  }
}

const SearchTextFieldContainer = connect(mapStateToProps, mapDispatchToProps)(SearchTextField);

export default SearchTextFieldContainer;
