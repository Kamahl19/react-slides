'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _presentation = require('../actions/presentation');

var currentSlide = localStorage.getItem('currentSlide');
var initialSlide = currentSlide === null ? 0 : parseInt(currentSlide, 10);

var initialState = {
    currentSlide: initialSlide,
    presenter: false
};

var presentation = function presentation() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case _presentation.NEXT_SLIDE:
            return _extends({}, state, {
                currentSlide: state.currentSlide + 1
            });

        case _presentation.PREVIOUS_SLIDE:
            return _extends({}, state, {
                currentSlide: state.currentSlide - 1
            });

        case _presentation.GO_TO_SLIDE:
            return _extends({}, state, {
                currentSlide: action.slide
            });

        case _presentation.TOGGLE_PRESENTER:
            return _extends({}, state, {
                presenter: !state.presenter
            });

        default:
            return state;
    }
};

exports.default = presentation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9wcmVzZW50YXRpb24uanMiXSwibmFtZXMiOlsiY3VycmVudFNsaWRlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImluaXRpYWxTbGlkZSIsInBhcnNlSW50IiwiaW5pdGlhbFN0YXRlIiwicHJlc2VudGVyIiwicHJlc2VudGF0aW9uIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic2xpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsZUFBZUMsYUFBYUMsT0FBYixDQUFxQixjQUFyQixDQUFyQjtBQUNBLElBQU1DLGVBQWdCSCxpQkFBaUIsSUFBbEIsR0FBMEIsQ0FBMUIsR0FBOEJJLFNBQVNKLFlBQVQsRUFBdUIsRUFBdkIsQ0FBbkQ7O0FBRUEsSUFBTUssZUFBZTtBQUNqQkwsa0JBQWNHLFlBREc7QUFFakJHLGVBQVc7QUFGTSxDQUFyQjs7QUFLQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWUsR0FBa0M7QUFBQSxRQUFqQ0MsS0FBaUMseURBQXpCSCxZQUF5QjtBQUFBLFFBQVhJLE1BQVc7O0FBQ25ELFlBQVFBLE9BQU9DLElBQWY7QUFDSTtBQUNJLGdDQUNPRixLQURQLEVBRU87QUFDQ1IsOEJBQWNRLE1BQU1SLFlBQU4sR0FBcUI7QUFEcEMsYUFGUDs7QUFPSjtBQUNJLGdDQUNPUSxLQURQLEVBRU87QUFDQ1IsOEJBQWNRLE1BQU1SLFlBQU4sR0FBcUI7QUFEcEMsYUFGUDs7QUFPSjtBQUNJLGdDQUNPUSxLQURQLEVBRU87QUFDQ1IsOEJBQWNTLE9BQU9FO0FBRHRCLGFBRlA7O0FBT0o7QUFDSSxnQ0FDT0gsS0FEUCxFQUVPO0FBQ0NGLDJCQUFXLENBQUNFLE1BQU1GO0FBRG5CLGFBRlA7O0FBT0o7QUFDSSxtQkFBT0UsS0FBUDtBQWxDUjtBQW9DSCxDQXJDRDs7a0JBdUNlRCxZIiwiZmlsZSI6InByZXNlbnRhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5FWFRfU0xJREUsIFBSRVZJT1VTX1NMSURFLCBHT19UT19TTElERSwgVE9HR0xFX1BSRVNFTlRFUiB9IGZyb20gJy4uL2FjdGlvbnMvcHJlc2VudGF0aW9uJztcclxuXHJcbmNvbnN0IGN1cnJlbnRTbGlkZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50U2xpZGUnKTtcclxuY29uc3QgaW5pdGlhbFNsaWRlID0gKGN1cnJlbnRTbGlkZSA9PT0gbnVsbCkgPyAwIDogcGFyc2VJbnQoY3VycmVudFNsaWRlLCAxMCk7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBjdXJyZW50U2xpZGU6IGluaXRpYWxTbGlkZSxcclxuICAgIHByZXNlbnRlcjogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBwcmVzZW50YXRpb24gPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTkVYVF9TTElERTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4ue1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZTogc3RhdGUuY3VycmVudFNsaWRlICsgMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlIFBSRVZJT1VTX1NMSURFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNsaWRlOiBzdGF0ZS5jdXJyZW50U2xpZGUgLSAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgR09fVE9fU0xJREU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC4uLntcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGU6IGFjdGlvbi5zbGlkZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlIFRPR0dMRV9QUkVTRU5URVI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC4uLntcclxuICAgICAgICAgICAgICAgICAgICBwcmVzZW50ZXI6ICFzdGF0ZS5wcmVzZW50ZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJlc2VudGF0aW9uO1xyXG4iXX0=