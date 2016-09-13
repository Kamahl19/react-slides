'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _Deck = require('../components/Deck');

var _Deck2 = _interopRequireDefault(_Deck);

var _presentation = require('../actions/presentation');

var PresentationActions = _interopRequireWildcard(_presentation);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        currentSlide: state.presentation.currentSlide,
        presenter: state.presentation.presenter
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(PresentationActions, dispatch);
};

var Presentation = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = (_temp = _class2 = function (_Component) {
    _inherits(Presentation, _Component);

    function Presentation() {
        _classCallCheck(this, Presentation);

        return _possibleConstructorReturn(this, (Presentation.__proto__ || Object.getPrototypeOf(Presentation)).apply(this, arguments));
    }

    _createClass(Presentation, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            localStorage.setItem('currentSlide', this.props.currentSlide);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Deck2.default, this.props);
        }
    }]);

    return Presentation;
}(_react.Component), _class2.propTypes = {
    currentSlide: _react.PropTypes.number.isRequired
}, _temp)) || _class);
exports.default = Presentation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250YWluZXJzL1ByZXNlbnRhdGlvbi5qcyJdLCJuYW1lcyI6WyJQcmVzZW50YXRpb25BY3Rpb25zIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjdXJyZW50U2xpZGUiLCJwcmVzZW50YXRpb24iLCJwcmVzZW50ZXIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsIlByZXNlbnRhdGlvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwcm9wcyIsInByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOztJQUFZQSxtQjs7Ozs7Ozs7Ozs7O0FBRVosSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsV0FBWTtBQUNoQ0Msc0JBQWNELE1BQU1FLFlBQU4sQ0FBbUJELFlBREQ7QUFFaENFLG1CQUFXSCxNQUFNRSxZQUFOLENBQW1CQztBQUZFLEtBQVo7QUFBQSxDQUF4Qjs7QUFLQSxJQUFNQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsV0FBYywrQkFBbUJQLG1CQUFuQixFQUF3Q08sUUFBeEMsQ0FBZDtBQUFBLENBQTNCOztJQUdxQkMsWSxXQURwQix5QkFBUVAsZUFBUixFQUF5Qkssa0JBQXpCLEM7Ozs7Ozs7Ozs7OzZDQU13QjtBQUNqQkcseUJBQWFDLE9BQWIsQ0FBcUIsY0FBckIsRUFBcUMsS0FBS0MsS0FBTCxDQUFXUixZQUFoRDtBQUNIOzs7aUNBRVE7QUFDTCxtQkFDSSw4Q0FBVSxLQUFLUSxLQUFmLENBREo7QUFHSDs7Ozs2QkFaTUMsUyxHQUFZO0FBQ2ZULGtCQUFjLGlCQUFVVSxNQUFWLENBQWlCQztBQURoQixDO2tCQURGTixZIiwiZmlsZSI6IlByZXNlbnRhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgRGVjayBmcm9tICcuLi9jb21wb25lbnRzL0RlY2snO1xyXG5pbXBvcnQgKiBhcyBQcmVzZW50YXRpb25BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvcHJlc2VudGF0aW9uJztcclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcclxuICAgIGN1cnJlbnRTbGlkZTogc3RhdGUucHJlc2VudGF0aW9uLmN1cnJlbnRTbGlkZSxcclxuICAgIHByZXNlbnRlcjogc3RhdGUucHJlc2VudGF0aW9uLnByZXNlbnRlcixcclxufSk7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IGJpbmRBY3Rpb25DcmVhdG9ycyhQcmVzZW50YXRpb25BY3Rpb25zLCBkaXNwYXRjaCk7XHJcblxyXG5AY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcylcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJlc2VudGF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgY3VycmVudFNsaWRlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFNsaWRlJywgdGhpcy5wcm9wcy5jdXJyZW50U2xpZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RGVjayB7Li4udGhpcy5wcm9wc30gLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==