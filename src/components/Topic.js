import React, { Component } from 'react';

export class Topic extends Component {
    render() {
        return (
            <p>id: {this.props.match.params.topicId}</p>
        );
    }
}
