import React, { Component, PropTypes } from 'react';
import Presenter from './Presenter';
import Slide from './Slide';
import Progress from './Progress';
import './deck.less';

const keyCodes = {
    leftArrow: 37,
    rightArrow: 39,
    previous: 177,
    next: 176,
    space: 32,
    F10: 121,
};

export default class Deck extends Component {
    static propTypes = {
        slides: PropTypes.array.isRequired,
        nextSlide: PropTypes.func.isRequired,
        previousSlide: PropTypes.func.isRequired,
        goToSlide: PropTypes.func.isRequired,
        togglePresenter: PropTypes.func.isRequired,
        currentSlide: PropTypes.number.isRequired,
        presenter: PropTypes.bool.isRequired,
    };

    constructor(props) {
        super(props);

        this.handleKeyDown = ::this.handleKeyDown;
        this.synchronizeCurrentSlide = ::this.synchronizeCurrentSlide;
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('storage', this.synchronizeCurrentSlide);
    }

    synchronizeCurrentSlide(e) {
        const { goToSlide, currentSlide, slides } = this.props;

        if (e.key === 'currentSlide') {
            const newValue = +e.newValue;

            if (newValue !== currentSlide) {
                if (newValue >= 0 && newValue <= slides.length - 1) {
                    goToSlide(newValue);
                }
            }
        }
    }

    handleKeyDown(e) {
        const { target, keyCode } = e;

        // Ignore keys usable in textarea if fired from textarea
        if (target.type === 'textarea' && (
                keyCode === keyCodes.leftArrow ||
                keyCode === keyCodes.rightArrow ||
                keyCode === keyCodes.space
            )) {
            return;
        }

        const { nextSlide, previousSlide, togglePresenter, currentSlide, slides } = this.props;

        switch (keyCode) {
            case keyCodes.leftArrow:
            case keyCodes.previous:
                if (currentSlide > 0) {
                    previousSlide();
                }
                break;

            case keyCodes.rightArrow:
            case keyCodes.next:
            case keyCodes.space:
                if (currentSlide < slides.length - 1) {
                    nextSlide();
                }
                break;

            case keyCodes.F10:
                togglePresenter();
                break;
            default:
        }
    }

    renderDeckContainer() {
        const { currentSlide, presenter, slides } = this.props;

        const { translateX, translateY, scale } = (presenter) ? {
            translateX: currentSlide * 50 * -1 - (slides.length / 2 * 50),
            translateY: -25,
            scale: 0.5,
        } : {
            translateX: currentSlide * 100 * -1,
            translateY: 0,
            scale: 1,
        };

        const style = {
            width: `${slides.length * 100}vw`,
            transform: `translate(${translateX}vw, ${translateY}vh) scale(${scale})`,
        };

        return (
            <div className="deck-container" style={style}>
                {slides.map((slide, idx) =>
                    <Slide key={idx}>{slide.content}</Slide>
                )}
            </div>
        );
    }

    render() {
        const { currentSlide, presenter, slides } = this.props;

        const notes = slides[currentSlide].notes;

        return (
            <div className="deck">
                <Presenter active={presenter} notes={notes}>
                    {this.renderDeckContainer()}
                    <Progress slidesCount={slides.length} currentSlide={currentSlide} />
                </Presenter>
            </div>
        );
    }
}
