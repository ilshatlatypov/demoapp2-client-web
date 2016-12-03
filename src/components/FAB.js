import React, {PropTypes} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const FAB = ({openDialog}) => (
  <FloatingActionButton secondary={true} className="fab" onTouchTap={openDialog}>
    <ContentAdd />
  </FloatingActionButton>
);

FAB.propTypes = {
  openDialog: PropTypes.func.isRequired
}

export default FAB;
