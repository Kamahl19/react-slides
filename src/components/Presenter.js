import React, { Component, PropTypes } from 'react';
import Timer from './Timer';
import SlideNotes from './SlideNotes';
import './presenter.less';

export default class Presenter extends Component {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
        notes: PropTypes.array,
    };

    static defaultProps = {
        notes: [],
    };

    render() {
        const { active, children, notes } = this.props;

        if (!active) {
            return (
                <div>
                    {children}
                </div>
            );
        }

        return (
            <div className="presenter">
                <Timer />
                {children}
                <SlideNotes notes={notes} />
            </div>
        );
    }
}
