import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Login = React.createClass({
  onLogin() {
    var {dispatch} = this.props;
    dispatch(actions.startLogin());
  },
  onLoginGoogle() {
    var {dispatch} = this.props;
    dispatch(actions.startLoginGoogle());
  },
  render() {
    return (
      <div>
        <h1 className="page-title">Jp-Todo</h1>

        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with GitHub or Google account below.
              </p>
              <button className="button primary" onClick={this.onLogin}>GitHub</button>
              <br/>
              <button className="button secondary" onClick={this.onLoginGoogle}>Google</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Login);
