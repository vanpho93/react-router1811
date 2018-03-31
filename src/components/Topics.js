import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { people } from '../data';

export class Topics extends Component {
    genPerson(person) {
        const { url } = this.props.match;
        return (
            <li key={person._id}>
                <Link to={url + '/' + person._id}>
                    {person.name}
                </Link>
            </li>
        );
    }
    render() {
        return (
            <div>
                <p>Topics Component</p>
                <ul>
                    { people.map(person => this.genPerson(person)) }
                </ul>
            </div>
        );
    }
}
