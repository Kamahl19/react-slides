import React, { Component } from 'react';
import DevTools from './DevTools';
import Presentation from './Presentation';

export default class App extends Component {
    render() {
        return (
            <div>
                <Presentation />
                { (process.env.NODE_ENV !== 'production') ? <DevTools /> : undefined }
            </div>
        );
    }
}
