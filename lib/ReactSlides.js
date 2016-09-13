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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZWFjdFNsaWRlcy5qcyJdLCJuYW1lcyI6WyJSZWFjdFNsaWRlcyIsInByb3BzIiwic3RvcmUiLCJzbGlkZXMiLCJwcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFc7OztBQUtqQix5QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhIQUNUQSxLQURTOztBQUdmLGNBQUtDLEtBQUwsR0FBYSwrQkFBYjtBQUhlO0FBSWxCOzs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFVLE9BQU8sS0FBS0EsS0FBdEI7QUFDSSwrREFBSyxRQUFRLEtBQUtELEtBQUwsQ0FBV0UsTUFBeEI7QUFESixhQURKO0FBS0g7Ozs7NEJBaEJNQyxTLEdBQVk7QUFDZkQsWUFBUSxpQkFBVUUsS0FBVixDQUFnQkM7QUFEVCxDO2tCQURGTixXIiwiZmlsZSI6IlJlYWN0U2xpZGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29udGFpbmVycy9BcHAnO1xyXG5cclxuaW1wb3J0ICdub3JtYWxpemUtY3NzJztcclxuaW1wb3J0ICdmb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzLmxlc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RTbGlkZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBzbGlkZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17dGhpcy5zdG9yZX0+XHJcbiAgICAgICAgICAgICAgICA8QXBwIHNsaWRlcz17dGhpcy5wcm9wcy5zbGlkZXN9IC8+XHJcbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=