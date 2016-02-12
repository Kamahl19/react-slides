import React, { Component, PropTypes } from 'react';
import DevTools from './DevTools';
import Presentation from './Presentation';

export default class App extends Component {
    static propTypes = {
        slides: PropTypes.array.isRequired,
    };

    render() {
        return (
            <div>
                <Presentation slides={this.props.slides} />
                { (process.env.NODE_ENV !== 'production') ? <DevTools /> : undefined }
            </div>
        );
    }
}
