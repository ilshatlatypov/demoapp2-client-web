import React, {Component, PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';

class Profile extends Component {
  componentWillMount() {
    this.props.fetchProfile();
  }

  handleChangePasswordTap = () => this.props.openChangePasswordDialog();

  render() {
    const {profile, loading, error} = this.props.profilePageContent;

    let content;
    if (loading) {
      content = <div className="centered"><CircularProgress/></div>;
    } else if (error) {
      content = <div className="centered error">Ошибка: {error.message}</div>;
    } else if (profile) {
      const fullname = profile.firstname + ' ' + profile.lastname;
      content =
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div>
            <h1 style={{margin:0}}>{fullname}</h1>
            <p>Логин: <b>{profile.username}</b></p>
          </div>
          <div>
            <RaisedButton id="changePasswordButton"
              label="Сменить пароль" primary={true}
              onTouchTap={this.handleChangePasswordTap}/>
          </div>
        </div>;
    }

    return (
      <Paper className="contentPaper" style={{padding:24}}>
        {content}
      </Paper>
    )
  }
}

Profile.propTypes = {
  profilePageContent: PropTypes.object.isRequired,
  fetchProfile: PropTypes.func.isRequired,
  openChangePasswordDialog: PropTypes.func.isRequired
}

export default Profile;
