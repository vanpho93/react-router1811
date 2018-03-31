import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <div>
                <NavLink to="/" activeStyle={{ fontWeight: 'bold' }} exact>Home</NavLink>
                <NavLink to="/topics" activeStyle={{ fontWeight: 'bold' }}>Topics</NavLink>
                <NavLink to="/about" activeStyle={{ fontWeight: 'bold' }}>About</NavLink>
                <NavLink to="/user" activeStyle={{ fontWeight: 'bold' }}>User</NavLink>
                <NavLink to="/sign-in" activeStyle={{ fontWeight: 'bold' }}>Sign in</NavLink>
            </div>
        );
    }
}
