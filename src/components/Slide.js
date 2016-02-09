import React, {Component} from 'react';
import './slide.less';

export default class Slide extends Component {
    render() {
        return (
            <div className="slide">
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
