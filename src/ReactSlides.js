import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';

import 'normalize-css';
import 'font-awesome/css/font-awesome.css';
import './styles.less';

export default class ReactSlides extends Component {
    static propTypes = {
        slides: PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);

        this.store = configureStore();
    }

    render() {
        return (
            <Provider store={this.store}>
                <App slides={this.props.slides} />
            </Provider>
        );
    }
}
