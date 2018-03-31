import React, { Component } from 'react';
import { Person } from '../data';

export class Topic extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true, person: null };
    }

    componentDidMount() {
        const { topicId } = this.props.match.params;
        Person.getPersonById(topicId)
        .then(person => this.setState({ isLoading: false, person }))
        .catch(error => {
            alert(error.message);
            this.setState({ isLoading: false });
        });
    }

    componentWillReceiveProps(props) {
        this.setState({ isLoading: true });
        const { topicId } = props.match.params;
        Person.getPersonById(topicId)
        .then(person => this.setState({ isLoading: false, person }))
        .catch(error => {
            alert(error.message);
            this.setState({ isLoading: false });
        });
    }

    render() {
        const { isLoading, person } = this.state;
        if (isLoading) return <p>Loading...</p>;
        if (!person) return <p>Cannot find person</p>
        return (
            <div>
                <p>Name: {person.name}</p>
                <p>Age: {person.age}</p>
                <p>_id: {person._id}</p>
            </div>
        );
    }
}
