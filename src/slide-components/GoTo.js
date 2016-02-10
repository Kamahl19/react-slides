import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { goToSlide } from '../actions/presentation';

class GoTo extends Component {
    static propTypes = {
        boundGoToSlide: PropTypes.func.isRequired,
        slide: PropTypes.number.isRequired,
        type: PropTypes.string,
        children: PropTypes.node,
    };

    static defaultProps = {
        type: 'button',
    };

    constructor(props) {
        super(props);

        this.goTo = ::this.goTo;
    }

    goTo() {
        const { boundGoToSlide, slide } = this.props;

        boundGoToSlide(slide);
    }

    renderButton(content) {
        return (
            <button type="button" onClick={this.goTo}>{content}</button>
        );
    }

    renderLink(content) {
        return (
            <a href="#" onClick={this.goTo}>{content}</a>
        );
    }

    render() {
        const { children, type, slide } = this.props;

        const content = (children) ? children : 'Go To Slide #' + (slide + 1);

        return (type === 'button') ? this.renderButton(content) : this.renderLink(content);
    }
}

const mapDispatchToProps = (dispatch) => ({
    boundGoToSlide: (slide) => dispatch(goToSlide(slide))
});

export default connect(undefined, mapDispatchToProps)(GoTo);
