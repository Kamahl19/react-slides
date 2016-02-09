import React, {Component, PropTypes} from 'react';
import cx from 'classnames';

export default class Icon extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        size: PropTypes.string,
    };

    render() {
        const { name, size } = this.props;

        const className = cx(
            'fa',
            `fa-${name}`,
            {
                [`fa-${size}`]: !!size
            }
        );

        return (
            <i className={className} />
        );
    }
}
