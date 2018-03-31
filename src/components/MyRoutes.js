// Route for autheticated user
import React from 'react';
import {
    Route, Redirect
} from 'react-router-dom';

export const AuthRoute = ({ component: Component, user, ...rest }) => (
    <Route {...rest} render={props => (
        user ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/',
            }} />
        )
    )} />
);

export const NotAuthRoute = ({ component: Component, user, ...rest }) => (
    <Route {...rest} render={props => (
        user ? (
            <Redirect to={{
                pathname: '/',
            }} />
        ) : (
            <Component {...props} />
        )
    )} />
);
