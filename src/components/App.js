import React, {Component} from 'react';
import {blueGrey500, blueGrey700,deepOrangeA200} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppToolbarContainer from '../containers/AppToolbarContainer';
import NavigationDrawerContainer from '../containers/NavigationDrawerContainer';
import GlobalSnackbarContainer from '../containers/GlobalSnackbarContainer';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey500,
    primary2Color: blueGrey700,
    accent1Color: deepOrangeA200,
  },
});

class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppToolbarContainer/>
          <NavigationDrawerContainer/>
          {this.props.children}
          <GlobalSnackbarContainer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
