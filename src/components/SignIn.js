import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignInComponent extends Component {
    render() {
        const { user, dispatch } = this.props;
        if (user) return <Redirect to="/user" />
        return (
            <div>
                SignIn Component
                <button onClick={() => dispatch({ type: 'SIGN_IN' })}>
                    Sign In
                </button>
            </div>
        );
    }
}

export const SignIn = connect(state => ({ user: state.user }))(SignInComponent);
