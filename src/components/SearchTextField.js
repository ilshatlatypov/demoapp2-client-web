import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import {blueGrey300, blueGrey700, white} from 'material-ui/styles/colors';

const styles = {
  root: {
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: blueGrey300,
    height: 36,
    borderRadius: 2,
    width: '100%',
    boxSizing: 'border-box'
  },
  input: {
    color: white
  },
  hint: {
    bottom: 6,
    color: blueGrey700
  }
}

class SearchTextField extends Component {

  handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.props.setSearchString('');
    }
  }

  render() {
    const {searchString, setSearchString} = this.props;
    return (
      <TextField
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        onKeyDown={this.handleKeyDown}
        underlineShow={false} hintText="Поиск"
        style={styles.root}
        inputStyle={styles.input}
        hintStyle={styles.hint} />
    )
  }
}

SearchTextField.propTypes = {
  searchString: PropTypes.string.isRequired,
  setSearchString: PropTypes.func.isRequired
}

export default SearchTextField;
