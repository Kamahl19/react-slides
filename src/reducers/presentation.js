import { NEXT_SLIDE, PREVIOUS_SLIDE, GO_TO_SLIDE, TOGGLE_PRESENTER } from '../actions/presentation';

const currentSlide = localStorage.getItem('currentSlide');
const initialSlide = (currentSlide === null) ? 0 : parseInt(currentSlide, 10);

const initialState = {
    currentSlide: initialSlide,
    presenter: false,
};

const presentation = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_SLIDE:
            return {
                ...state,
                ...{
                    currentSlide: state.currentSlide + 1
                }
            };

        case PREVIOUS_SLIDE:
            return {
                ...state,
                ...{
                    currentSlide: state.currentSlide - 1
                }
            };

        case GO_TO_SLIDE:
            return {
                ...state,
                ...{
                    currentSlide: action.slide
                }
            };

        case TOGGLE_PRESENTER:
            return {
                ...state,
                ...{
                    presenter: !state.presenter
                }
            };

        default:
            return state;
    }
};

export default presentation;
