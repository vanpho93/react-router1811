import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Topic } from './Topic';
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
        const { url } = this.props.match;
        return (
            <div>
                <p>Topics Component</p>
                <ul>
                    { people.map(person => this.genPerson(person)) }
                </ul>
                <Route path={url + '/:topicId'} component={Topic} />
            </div>
        );
    }
}
