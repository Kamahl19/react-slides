'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _configureStore = require('./store/configureStore');

var _configureStore2 = _interopRequireDefault(_configureStore);

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

require('normalize-css');

require('font-awesome/css/font-awesome.css');

require('./styles.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactSlides = (_temp = _class = function (_Component) {
    _inherits(ReactSlides, _Component);

    function ReactSlides(props) {
        _classCallCheck(this, ReactSlides);

        var _this = _possibleConstructorReturn(this, (ReactSlides.__proto__ || Object.getPrototypeOf(ReactSlides)).call(this, props));

        if (localStorage.getItem('currentSlide') >= _this.props.slides.length) {
            localStorage.setItem('currentSlide', 0);
        }

        _this.store = (0, _configureStore2.default)();
        return _this;
    }

    _createClass(ReactSlides, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRedux.Provider,
                { store: this.store },
                _react2.default.createElement(_App2.default, { slides: this.props.slides })
            );
        }
    }]);

    return ReactSlides;
}(_react.Component), _class.propTypes = {
    slides: _react.PropTypes.array.isRequired
}, _temp);
exports.default = ReactSlides;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZWFjdFNsaWRlcy5qcyJdLCJuYW1lcyI6WyJSZWFjdFNsaWRlcyIsInByb3BzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNsaWRlcyIsImxlbmd0aCIsInNldEl0ZW0iLCJzdG9yZSIsInByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsVzs7O0FBS2pCLHlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEhBQ1RBLEtBRFM7O0FBR2YsWUFBSUMsYUFBYUMsT0FBYixDQUFxQixjQUFyQixLQUF3QyxNQUFLRixLQUFMLENBQVdHLE1BQVgsQ0FBa0JDLE1BQTlELEVBQXNFO0FBQ2xFSCx5QkFBYUksT0FBYixDQUFxQixjQUFyQixFQUFxQyxDQUFyQztBQUNIOztBQUVELGNBQUtDLEtBQUwsR0FBYSwrQkFBYjtBQVBlO0FBUWxCOzs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFVLE9BQU8sS0FBS0EsS0FBdEI7QUFDSSwrREFBSyxRQUFRLEtBQUtOLEtBQUwsQ0FBV0csTUFBeEI7QUFESixhQURKO0FBS0g7Ozs7NEJBcEJNSSxTLEdBQVk7QUFDZkosWUFBUSxpQkFBVUssS0FBVixDQUFnQkM7QUFEVCxDO2tCQURGVixXIiwiZmlsZSI6IlJlYWN0U2xpZGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29udGFpbmVycy9BcHAnO1xuXG5pbXBvcnQgJ25vcm1hbGl6ZS1jc3MnO1xuaW1wb3J0ICdmb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy5sZXNzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RTbGlkZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHNsaWRlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRTbGlkZScpID49IHRoaXMucHJvcHMuc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRTbGlkZScsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXt0aGlzLnN0b3JlfT5cbiAgICAgICAgICAgICAgICA8QXBwIHNsaWRlcz17dGhpcy5wcm9wcy5zbGlkZXN9IC8+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==