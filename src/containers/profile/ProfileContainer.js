import {connect} from 'react-redux';
import {fetchProfile, openChangePasswordDialog} from '../../actions/profile';
import Profile from '../../components/profile/Profile';

const ProfileContainer = connect(
  state => ({
    profilePageContent: state.profile.pageContent
  }),
  dispatch => ({
    fetchProfile: () => dispatch(fetchProfile()),
    openChangePasswordDialog: () => dispatch(openChangePasswordDialog())
  })
)(Profile)

export default ProfileContainer;
