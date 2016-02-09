export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE';
export const GO_TO_SLIDE = 'GO_TO_SLIDE';
export const TOGGLE_PRESENTER = 'TOGGLE_PRESENTER';

export const nextSlide = () => {
    return {
        type: NEXT_SLIDE
    };
}

export const previousSlide = () => {
    return {
        type: PREVIOUS_SLIDE
    };
}

export const goToSlide = (slide) => {
    return {
        type: GO_TO_SLIDE,
        slide
    };
}

export const togglePresenter = () => {
    return {
        type: TOGGLE_PRESENTER
    };
}
