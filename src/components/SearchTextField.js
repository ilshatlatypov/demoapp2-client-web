import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import {blueGrey300, blueGrey700, white} from 'material-ui/styles/colors';

const styles = {
  root: {
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: blueGrey300,
    height: 36,
    borderRadius: 2
  },
  input: {
    color: white
  },
  hint: {
    bottom: 6,
    color: blueGrey700
  }
}

const SearchTextField = ({searchString, onChange}) => (
    <TextField
      value={searchString}
      onChange={(e) => onChange(e.target.value.trim())}
      underlineShow={false} hintText="Поиск"
      style={styles.root}
      inputStyle={styles.input}
      hintStyle={styles.hint} />
);

SearchTextField.propTypes = {
  searchString: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default SearchTextField;
