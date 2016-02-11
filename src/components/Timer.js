import React, { Component } from 'react';
import './timer.less';

function secondsTohhmmss(totalSec) {
    const hours = parseInt(totalSec / 3600, 10) % 24;
    const minutes = parseInt(totalSec / 60, 10) % 60;
    const seconds = totalSec % 60;

    const hoursStr = (hours < 10) ? `0${hours}` : hours;
    const minutesStr = (minutes < 10) ? `0${minutes}` : minutes;
    const secondsStr = (seconds < 10) ? `0${seconds}` : seconds;

    return `${hoursStr}:${minutesStr}:${secondsStr}`;
}

export default class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seconds: 0,
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                seconds: ++this.state.seconds,
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        this.interval = null;
    }

    render() {
        const { seconds } = this.state;

        return (
            <div className="timer">
                {secondsTohhmmss(seconds)}
            </div>
        );
    }
}
