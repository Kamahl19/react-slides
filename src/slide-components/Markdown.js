import React, { Component, PropTypes } from 'react';
import ReactMarkdown from 'react-markdown';

export default class Markdown extends Component {
    static propTypes = {
        source: PropTypes.string.isRequired,
    };

    render() {
        const { children, external, href } = this.props;

        return (
            <ReactMarkdown source={this.props.source} />
        );
    }
}
