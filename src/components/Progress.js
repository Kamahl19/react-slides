import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import './progress.less';

export default class Progress extends Component {
    static propTypes = {
        slidesCount: PropTypes.number.isRequired,
        currentSlide: PropTypes.number.isRequired,
    };

    render() {
        const { slidesCount, currentSlide } = this.props;

        const items = [];

        for (let i = 0; i < slidesCount; i++) {
            const className = cx('progress-item', {
                filled: i === currentSlide
            });

            items.push(<div className={className} key={i}></div>);
        }

        return (
            <div className="progress">
                {items}
            </div>
        );
    }
}
