import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Deck from '../components/Deck';
import * as PresentationActions from '../actions/presentation';

const mapStateToProps = (state) => {
    return {
        currentSlide: state.presentation.currentSlide,
        presenter: state.presentation.presenter,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(PresentationActions, dispatch);
};

export default class Presentation extends Component {
    componentDidUpdate() {
        localStorage.setItem('currentSlide', this.props.currentSlide);
    }

    render() {
        return (
            <Deck {...this.props} />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
