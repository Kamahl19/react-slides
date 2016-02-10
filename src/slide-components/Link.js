import React, { Component, PropTypes } from 'react';
import Icon from './Icon';

export default class Link extends Component {
    static propTypes = {
        href: PropTypes.string.isRequired,
        external: PropTypes.bool,
        children: PropTypes.node,
    };

    static defaultProps = {
        external: true,
        children: (<Icon name="external-link" />),
    };

    render() {
        const { children, external, href } = this.props;

        return (
            <a href={href} target={ (external) ? '_blank' : '_self' }>{children}</a>
        );
    }
}
