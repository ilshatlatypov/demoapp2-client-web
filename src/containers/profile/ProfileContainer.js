import {connect} from 'react-redux';
import {fetchProfile} from '../../actions/profile';
import Profile from '../../components/profile/Profile';

const ProfileContainer = connect(
  state => ({
    profilePageContent: state.profile.pageContent
  }),
  dispatch => ({
    fetchProfile: () => dispatch(fetchProfile())
  })
)(Profile)

export default ProfileContainer
