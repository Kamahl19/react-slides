'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Presenter = require('./Presenter');

var _Presenter2 = _interopRequireDefault(_Presenter);

var _Slide = require('./Slide');

var _Slide2 = _interopRequireDefault(_Slide);

var _Progress = require('./Progress');

var _Progress2 = _interopRequireDefault(_Progress);

require('./deck.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var keyCodes = {
    leftArrow: 37,
    rightArrow: 39,
    previous: 177,
    next: 176,
    space: 32,
    F10: 121,
    F11: 122
};

var Deck = (_temp = _class = function (_Component) {
    _inherits(Deck, _Component);

    function Deck(props) {
        _classCallCheck(this, Deck);

        var _this = _possibleConstructorReturn(this, (Deck.__proto__ || Object.getPrototypeOf(Deck)).call(this, props));

        _this.synchronizeCurrentSlide = function (e) {
            var _this$props = _this.props;
            var goToSlide = _this$props.goToSlide;
            var currentSlide = _this$props.currentSlide;
            var slides = _this$props.slides;


            if (e.key === 'currentSlide') {
                var newValue = +e.newValue;

                if (newValue !== currentSlide) {
                    if (newValue >= 0 && newValue <= slides.length - 1) {
                        goToSlide(newValue);
                    }
                }
            }
        };

        _this.handleKeyDown = function (e) {
            var target = e.target;
            var keyCode = e.keyCode;
            var shiftKey = e.shiftKey;

            // Ignore keys usable in textarea if fired from textarea

            if (target.type === 'textarea' && (keyCode === keyCodes.leftArrow || keyCode === keyCodes.rightArrow || keyCode === keyCodes.space)) {
                return;
            }

            if (target.type === 'textarea' && keyCode === keyCodes.F11 && shiftKey) {
                _this.setState({
                    fullScreenCode: !_this.state.fullScreenCode
                });

                return;
            }

            var _this$props2 = _this.props;
            var nextSlide = _this$props2.nextSlide;
            var previousSlide = _this$props2.previousSlide;
            var togglePresenter = _this$props2.togglePresenter;
            var currentSlide = _this$props2.currentSlide;
            var slides = _this$props2.slides;


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
                    if (shiftKey) {
                        togglePresenter();
                    }
                    break;
                default:
            }
        };

        _this.state = {
            fullScreenCode: false
        };
        return _this;
    }

    _createClass(Deck, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            window.addEventListener('keydown', this.handleKeyDown);
            window.addEventListener('storage', this.synchronizeCurrentSlide);
        }
    }, {
        key: 'renderDeckContainer',
        value: function renderDeckContainer() {
            var _props = this.props;
            var currentSlide = _props.currentSlide;
            var presenter = _props.presenter;
            var slides = _props.slides;

            var _ref = presenter ? {
                translateX: currentSlide * 50 * -1 - slides.length / 2 * 50,
                translateY: -25,
                scale: 0.5
            } : {
                translateX: currentSlide * 100 * -1,
                translateY: 0,
                scale: 1
            };

            var translateX = _ref.translateX;
            var translateY = _ref.translateY;
            var scale = _ref.scale;


            var style = {
                width: slides.length * 100 + 'vw',
                transform: 'translate(' + translateX + 'vw, ' + translateY + 'vh) scale(' + scale + ')'
            };

            var className = (0, _classnames2.default)('deck-container', {
                'fullscreen-code': !!this.state.fullScreenCode
            });

            return _react2.default.createElement(
                'div',
                { className: className, style: style },
                slides.map(function (slide, idx) {
                    return _react2.default.createElement(
                        _Slide2.default,
                        { key: idx },
                        slide.content
                    );
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var currentSlide = _props2.currentSlide;
            var presenter = _props2.presenter;
            var slides = _props2.slides;


            var notes = slides[currentSlide].notes;

            return _react2.default.createElement(
                'div',
                { className: 'deck' },
                _react2.default.createElement(
                    _Presenter2.default,
                    { active: presenter, notes: notes },
                    this.renderDeckContainer(),
                    _react2.default.createElement(_Progress2.default, { slidesCount: slides.length, currentSlide: currentSlide })
                )
            );
        }
    }]);

    return Deck;
}(_react.Component), _class.propTypes = {
    slides: _react.PropTypes.array.isRequired,
    nextSlide: _react.PropTypes.func.isRequired,
    previousSlide: _react.PropTypes.func.isRequired,
    goToSlide: _react.PropTypes.func.isRequired,
    togglePresenter: _react.PropTypes.func.isRequired,
    currentSlide: _react.PropTypes.number.isRequired,
    presenter: _react.PropTypes.bool.isRequired
}, _temp);
exports.default = Deck;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0RlY2suanMiXSwibmFtZXMiOlsia2V5Q29kZXMiLCJsZWZ0QXJyb3ciLCJyaWdodEFycm93IiwicHJldmlvdXMiLCJuZXh0Iiwic3BhY2UiLCJGMTAiLCJGMTEiLCJEZWNrIiwicHJvcHMiLCJzeW5jaHJvbml6ZUN1cnJlbnRTbGlkZSIsImUiLCJnb1RvU2xpZGUiLCJjdXJyZW50U2xpZGUiLCJzbGlkZXMiLCJrZXkiLCJuZXdWYWx1ZSIsImxlbmd0aCIsImhhbmRsZUtleURvd24iLCJ0YXJnZXQiLCJrZXlDb2RlIiwic2hpZnRLZXkiLCJ0eXBlIiwic2V0U3RhdGUiLCJmdWxsU2NyZWVuQ29kZSIsInN0YXRlIiwibmV4dFNsaWRlIiwicHJldmlvdXNTbGlkZSIsInRvZ2dsZVByZXNlbnRlciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmVzZW50ZXIiLCJ0cmFuc2xhdGVYIiwidHJhbnNsYXRlWSIsInNjYWxlIiwic3R5bGUiLCJ3aWR0aCIsInRyYW5zZm9ybSIsImNsYXNzTmFtZSIsIm1hcCIsInNsaWRlIiwiaWR4IiwiY29udGVudCIsIm5vdGVzIiwicmVuZGVyRGVja0NvbnRhaW5lciIsInByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJudW1iZXIiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFdBQVc7QUFDYkMsZUFBVyxFQURFO0FBRWJDLGdCQUFZLEVBRkM7QUFHYkMsY0FBVSxHQUhHO0FBSWJDLFVBQU0sR0FKTztBQUtiQyxXQUFPLEVBTE07QUFNYkMsU0FBSyxHQU5RO0FBT2JDLFNBQUs7QUFQUSxDQUFqQjs7SUFVcUJDLEk7OztBQVdqQixrQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGdIQUNUQSxLQURTOztBQUFBLGNBYW5CQyx1QkFi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LE1BQTlCLEVBQXNDLGNBQWNKLFlBQXBEO0FBRko7QUFESixhQURKO0FBUUg7Ozs7NEJBaElNZ0MsUyxHQUFZO0FBQ2YvQixZQUFRLGlCQUFVZ0MsS0FBVixDQUFnQkMsVUFEVDtBQUVmckIsZUFBVyxpQkFBVXNCLElBQVYsQ0FBZUQsVUFGWDtBQUdmcEIsbUJBQWUsaUJBQVVxQixJQUFWLENBQWVELFVBSGY7QUFJZm5DLGVBQVcsaUJBQVVvQyxJQUFWLENBQWVELFVBSlg7QUFLZm5CLHFCQUFpQixpQkFBVW9CLElBQVYsQ0FBZUQsVUFMakI7QUFNZmxDLGtCQUFjLGlCQUFVb0MsTUFBVixDQUFpQkYsVUFOaEI7QUFPZmhCLGVBQVcsaUJBQVVtQixJQUFWLENBQWVIO0FBUFgsQztrQkFERnZDLEkiLCJmaWxlIjoiRGVjay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgUHJlc2VudGVyIGZyb20gJy4vUHJlc2VudGVyJztcclxuaW1wb3J0IFNsaWRlIGZyb20gJy4vU2xpZGUnO1xyXG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSAnLi9Qcm9ncmVzcyc7XHJcbmltcG9ydCAnLi9kZWNrLmxlc3MnO1xyXG5cclxuY29uc3Qga2V5Q29kZXMgPSB7XHJcbiAgICBsZWZ0QXJyb3c6IDM3LFxyXG4gICAgcmlnaHRBcnJvdzogMzksXHJcbiAgICBwcmV2aW91czogMTc3LFxyXG4gICAgbmV4dDogMTc2LFxyXG4gICAgc3BhY2U6IDMyLFxyXG4gICAgRjEwOiAxMjEsXHJcbiAgICBGMTE6IDEyMixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlY2sgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBzbGlkZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgICAgIG5leHRTbGlkZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgICBwcmV2aW91c1NsaWRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gICAgICAgIGdvVG9TbGlkZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgICAgICB0b2dnbGVQcmVzZW50ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgY3VycmVudFNsaWRlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgcHJlc2VudGVyOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZnVsbFNjcmVlbkNvZGU6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleURvd24pO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgdGhpcy5zeW5jaHJvbml6ZUN1cnJlbnRTbGlkZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3luY2hyb25pemVDdXJyZW50U2xpZGUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZ29Ub1NsaWRlLCBjdXJyZW50U2xpZGUsIHNsaWRlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnY3VycmVudFNsaWRlJykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdWYWx1ZSA9ICtlLm5ld1ZhbHVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBjdXJyZW50U2xpZGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA+PSAwICYmIG5ld1ZhbHVlIDw9IHNsaWRlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ29Ub1NsaWRlKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVLZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7IHRhcmdldCwga2V5Q29kZSwgc2hpZnRLZXkgfSA9IGU7XHJcblxyXG4gICAgICAgIC8vIElnbm9yZSBrZXlzIHVzYWJsZSBpbiB0ZXh0YXJlYSBpZiBmaXJlZCBmcm9tIHRleHRhcmVhXHJcbiAgICAgICAgaWYgKHRhcmdldC50eXBlID09PSAndGV4dGFyZWEnICYmIChcclxuICAgICAgICAgICAgICAgIGtleUNvZGUgPT09IGtleUNvZGVzLmxlZnRBcnJvdyB8fFxyXG4gICAgICAgICAgICAgICAga2V5Q29kZSA9PT0ga2V5Q29kZXMucmlnaHRBcnJvdyB8fFxyXG4gICAgICAgICAgICAgICAga2V5Q29kZSA9PT0ga2V5Q29kZXMuc3BhY2VcclxuICAgICAgICAgICAgKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGFyZ2V0LnR5cGUgPT09ICd0ZXh0YXJlYScgJiYga2V5Q29kZSA9PT0ga2V5Q29kZXMuRjExICYmIHNoaWZ0S2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZnVsbFNjcmVlbkNvZGU6ICF0aGlzLnN0YXRlLmZ1bGxTY3JlZW5Db2RlLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHsgbmV4dFNsaWRlLCBwcmV2aW91c1NsaWRlLCB0b2dnbGVQcmVzZW50ZXIsIGN1cnJlbnRTbGlkZSwgc2xpZGVzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBrZXlDb2Rlcy5sZWZ0QXJyb3c6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZXMucHJldmlvdXM6XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNsaWRlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzU2xpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBrZXlDb2Rlcy5yaWdodEFycm93OlxyXG4gICAgICAgICAgICBjYXNlIGtleUNvZGVzLm5leHQ6XHJcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZXMuc3BhY2U6XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFNsaWRlIDwgc2xpZGVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0U2xpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBrZXlDb2Rlcy5GMTA6XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVQcmVzZW50ZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEZWNrQ29udGFpbmVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudFNsaWRlLCBwcmVzZW50ZXIsIHNsaWRlcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgeyB0cmFuc2xhdGVYLCB0cmFuc2xhdGVZLCBzY2FsZSB9ID0gKHByZXNlbnRlcikgPyB7XHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVg6IGN1cnJlbnRTbGlkZSAqIDUwICogLTEgLSAoc2xpZGVzLmxlbmd0aCAvIDIgKiA1MCksXHJcbiAgICAgICAgICAgIHRyYW5zbGF0ZVk6IC0yNSxcclxuICAgICAgICAgICAgc2NhbGU6IDAuNSxcclxuICAgICAgICB9IDoge1xyXG4gICAgICAgICAgICB0cmFuc2xhdGVYOiBjdXJyZW50U2xpZGUgKiAxMDAgKiAtMSxcclxuICAgICAgICAgICAgdHJhbnNsYXRlWTogMCxcclxuICAgICAgICAgICAgc2NhbGU6IDEsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBgJHtzbGlkZXMubGVuZ3RoICogMTAwfXZ3YCxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlKCR7dHJhbnNsYXRlWH12dywgJHt0cmFuc2xhdGVZfXZoKSBzY2FsZSgke3NjYWxlfSlgLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGN4KCdkZWNrLWNvbnRhaW5lcicsIHtcclxuICAgICAgICAgICAgJ2Z1bGxzY3JlZW4tY29kZSc6ICEhdGhpcy5zdGF0ZS5mdWxsU2NyZWVuQ29kZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICAgICAge3NsaWRlcy5tYXAoKHNsaWRlLCBpZHgpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlIGtleT17aWR4fT57c2xpZGUuY29udGVudH08L1NsaWRlPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjdXJyZW50U2xpZGUsIHByZXNlbnRlciwgc2xpZGVzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBub3RlcyA9IHNsaWRlc1tjdXJyZW50U2xpZGVdLm5vdGVzO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlY2tcIj5cclxuICAgICAgICAgICAgICAgIDxQcmVzZW50ZXIgYWN0aXZlPXtwcmVzZW50ZXJ9IG5vdGVzPXtub3Rlc30+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyRGVja0NvbnRhaW5lcigpfVxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzcyBzbGlkZXNDb3VudD17c2xpZGVzLmxlbmd0aH0gY3VycmVudFNsaWRlPXtjdXJyZW50U2xpZGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1ByZXNlbnRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=