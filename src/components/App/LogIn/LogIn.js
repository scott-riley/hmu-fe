import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {logInUser} from '../../../actions/index';
import Btn from '../../Global/Btn/Btn';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import s from './LogIn.css';

class LogIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user.status == "success") {
      this.context.router.push('/app/messages');
    }
  };

  render() {
    const {user} = this.props;
    const {email, password} = this.state;
    return (
      <div className={s.root}>
        <form onSubmit={(e) => { e.preventDefault(); this.props.logInUser({ email: this.state.email, password: this.state.password}) }}>
          { user && user.status ?
            <div className={s.error}>{user.status}</div>
          :
            null }
          <div className={s.formGroup}>
            <label>Email</label>
            <input type="email" name="email" placeholder="Your email" value={email} onChange={this.handleEmailChange} />
          </div>
          <div className={s.formGroup}>
            <label>Password</label>
            <input type="password" name="password" placeholder="Your password" value={password} onChange={this.handlePasswordChange}  />
          </div>
          <div className={s.formGroup}>
            <Btn modifier="full">Log in</Btn>
          </div>
        </form>
      </div>
    );
  }
}

LogIn.contextTypes = {
  router: React.PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logInUser: logInUser,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
