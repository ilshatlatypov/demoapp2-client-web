import React, {Component, PropTypes} from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ContentPaste from 'material-ui/svg-icons/content/content-paste';
import SocialPeople from 'material-ui/svg-icons/social/people';
import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionAccountBox from 'material-ui/svg-icons/action/account-box';
import {Link} from 'react-router';

let SelectableList = MakeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      selectedItem: PropTypes.number.isRequired
    };

    doNothing = () => {};

    render() {
      return (
        <ComposedComponent
          value={this.props.selectedItem}
          onChange={this.doNothing}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

const getSelectedItemByLocation = (location) => {
  switch (location.pathname) {
    case '/': return 0;
    case '/tasks': return 1;
    case '/employees': return 2;
    case '/profile': return 3;
    default: return -1;
  }
}

const NavigationDrawer = ({open, onRequestChange, onNavItemSelected, onLogout, location}) => (
  <Drawer id="navigationDrawer"
    docked={false}
    open={open}
    onRequestChange={onRequestChange}
  >
    <SelectableList selectedItem={getSelectedItemByLocation(location)}>
      <ListItem containerElement={<Link to="/" />} value={0} primaryText="Главная" leftIcon={<ActionHome />} onTouchTap={onNavItemSelected}/>
      <ListItem containerElement={<Link to="/tasks" />} value={1} primaryText="Задачи" leftIcon={<ContentPaste />} onTouchTap={onNavItemSelected}/>
      <ListItem containerElement={<Link to="/employees" />} value={2} primaryText="Сотрудники" leftIcon={<SocialPeople />} onTouchTap={onNavItemSelected}/>
      <ListItem containerElement={<Link to="/profile" />} value={3} primaryText="Профиль" leftIcon={<ActionAccountBox />} onTouchTap={onNavItemSelected}/>
    </SelectableList>
    <Divider />
    <List>
      <ListItem containerElement={<Link to="/login" />} primaryText="Выйти" leftIcon={<ActionExitToApp />} onTouchTap={() => {onLogout(); onNavItemSelected();}}/>
    </List>
  </Drawer>
);

NavigationDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onRequestChange: PropTypes.func.isRequired,
  onNavItemSelected: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
}

export default NavigationDrawer;
