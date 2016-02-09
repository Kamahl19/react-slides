import React, { Component, PropTypes } from 'react';
import './slidenotes.less';

export default class SlideNotes extends Component {
    static propTypes = {
        notes: PropTypes.array.isRequired,
    };

    render() {
        const { notes } = this.props;

        if (!notes.length) {
            return (<div></div>);
        }

        return (
            <div className="slide-notes">
                <ul>
                    {notes.map((note, idx) =>
                        <li key={idx}>{note}</li>
                    )}
                </ul>
            </div>
        );
    }
}
