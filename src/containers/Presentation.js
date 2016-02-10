import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Deck from '../components/Deck';
import * as PresentationActions from '../actions/presentation';

const mapStateToProps = (state) => ({
    currentSlide: state.presentation.currentSlide,
    presenter: state.presentation.presenter,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(PresentationActions, dispatch);

export default class Presentation extends Component {
    static propTypes = {
        currentSlide: PropTypes.number.isRequired,
    };

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
