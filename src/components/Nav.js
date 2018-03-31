import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/topics">Topics</Link>
                <Link to="/about">About</Link>
            </div>
        );
    }
}
