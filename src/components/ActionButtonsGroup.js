import React, {PropTypes} from 'react';
import IconButton from 'material-ui/IconButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';

const doNotPropagate = (e) => e.stopPropagation();

const ActionButtonsGroup = props => {
  const {item, openEditDialog, openDeleteDialog} = props;
  return (
    <div className="actionButtons">
      <IconButton
        onClick={doNotPropagate}
        onTouchTap={() => openEditDialog(item.id)}>
        <EditorModeEdit />
      </IconButton>
      <IconButton
        onClick={doNotPropagate}
        onTouchTap={() => openDeleteDialog(item)}>
        <ActionDelete />
      </IconButton>
    </div>
  )
}

ActionButtonsGroup.propTypes = {
  item: PropTypes.object.isRequired,
  openEditDialog: PropTypes.func.isRequired,
  openDeleteDialog: PropTypes.func.isRequired
}

export default ActionButtonsGroup;
