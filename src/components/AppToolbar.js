import React, {PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import SearchTextFieldContainer from '../containers/SearchTextFieldContainer';

const getTitleByLocation = (location) => {
  switch (location.pathname) {
    case '/': return "Главная";
    case '/tasks': return "Задачи";
    case '/employees': return "Сотрудники";
    case '/login': return "Вход";
    default: return "";
  }
}

const getStyles = (theme) => {
  const appBar = theme.appBar;
  const iconButtonSize = theme.button.iconButtonSize;
  var styles = {
    root: {
      height: appBar.height,
      backgroundColor: appBar.color,
    },
    title: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: 0,
      paddingTop: 0,
      letterSpacing: 0,
      fontFamily: 'Roboto',
      fontSize: 24,
      fontWeight: appBar.titleFontWeight,
      color: appBar.textColor,
      height: appBar.height,
      lineHeight: appBar.height + 'px'
    },
    iconButtonLeftStyle: {
      marginTop: (appBar.height - iconButtonSize) / 2,
      marginRight: 8,
      marginLeft: 8
    },
    iconButtonRightStyle: {
      marginTop: (appBar.height - iconButtonSize) / 2,
      marginRight: -16
    },
    iconButtonIconStyle: {
      fill: appBar.textColor,
      color: appBar.textColor
    }
  };
  return styles;
}

const AppToolbar = ({location, onMenuIconButtonTouchTap}, context) => {
  const title = getTitleByLocation(location);
  const styles = getStyles(context.muiTheme);
  const navButtonVisible = location.pathname !== '/login';
  const navButton =
    <IconButton id="menuButton"
      style={styles.iconButtonLeftStyle}
      iconStyle={styles.iconButtonIconStyle}
      onTouchTap={onMenuIconButtonTouchTap}>
      <NavigationMenu />
    </IconButton>;
  const navButtonStub = <div style={styles.iconButtonLeftStyle}/>;
  const displaySearchBox = (location.pathname === '/employees');

  return (
    <Toolbar style={styles.root}>

      <ToolbarGroup firstChild={true} style={{position: 'absolute'}}>
        {navButtonVisible ? navButton : navButtonStub}
        <h1 style={styles.title}>{title}</h1>
      </ToolbarGroup>

      {
        displaySearchBox ?
          <div style={{display: 'flex', width: '100%'}}>
            <div style={{minWidth: 200}}></div>
            <div className="toolbarGroupCentered"><SearchTextFieldContainer/></div>
            <div style={{minWidth: 200}}></div>
          </div>
          : null
      }

    </Toolbar>
  );
}

AppToolbar.contextTypes = {
  muiTheme: PropTypes.object.isRequired
};

AppToolbar.propTypes = {
  location: PropTypes.object.isRequired,
  onMenuIconButtonTouchTap: PropTypes.func.isRequired
}

export default AppToolbar;
