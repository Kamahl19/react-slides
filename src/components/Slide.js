import React, { Component, PropTypes } from 'react';
import './slide.less';

export default class Slide extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

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
