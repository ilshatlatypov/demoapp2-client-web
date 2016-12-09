import React from 'react';
import ProfileContainer from '../containers/profile/ProfileContainer';
import ChangePasswordDialogContainer from '../containers/profile/ChangePasswordDialogContainer';

const ProfilePage = (props) => (
  <div>
    <ProfileContainer/>
    <ChangePasswordDialogContainer/>
  </div>
);

export default ProfilePage;
