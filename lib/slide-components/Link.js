'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = (_temp = _class = function (_Component) {
    _inherits(Link, _Component);

    function Link() {
        _classCallCheck(this, Link);

        return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
    }

    _createClass(Link, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var external = _props.external;
            var href = _props.href;


            return _react2.default.createElement(
                'a',
                { href: href, target: external ? '_blank' : '_self' },
                children
            );
        }
    }]);

    return Link;
}(_react.Component), _class.propTypes = {
    href: _react.PropTypes.string.isRequired,
    external: _react.PropTypes.bool,
    children: _react.PropTypes.node
}, _class.defaultProps = {
    external: true,
    children: _react2.default.createElement(_Icon2.default, { name: 'external-link' })
}, _temp);
exports.default = Link;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zbGlkZS1jb21wb25lbnRzL0xpbmsuanMiXSwibmFtZXMiOlsiTGluayIsInByb3BzIiwiY2hpbGRyZW4iLCJleHRlcm5hbCIsImhyZWYiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYm9vbCIsIm5vZGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7OztpQ0FZUjtBQUFBLHlCQUNnQyxLQUFLQyxLQURyQztBQUFBLGdCQUNHQyxRQURILFVBQ0dBLFFBREg7QUFBQSxnQkFDYUMsUUFEYixVQUNhQSxRQURiO0FBQUEsZ0JBQ3VCQyxJQUR2QixVQUN1QkEsSUFEdkI7OztBQUdMLG1CQUNJO0FBQUE7QUFBQSxrQkFBRyxNQUFNQSxJQUFULEVBQWUsUUFBVUQsUUFBRCxHQUFhLFFBQWIsR0FBd0IsT0FBaEQ7QUFBMkREO0FBQTNELGFBREo7QUFHSDs7Ozs0QkFqQk1HLFMsR0FBWTtBQUNmRCxVQUFNLGlCQUFVRSxNQUFWLENBQWlCQyxVQURSO0FBRWZKLGNBQVUsaUJBQVVLLElBRkw7QUFHZk4sY0FBVSxpQkFBVU87QUFITCxDLFNBTVpDLFksR0FBZTtBQUNsQlAsY0FBVSxJQURRO0FBRWxCRCxjQUFXLGdEQUFNLE1BQUssZUFBWDtBQUZPLEM7a0JBUExGLEkiLCJmaWxlIjoiTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmsgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgZXh0ZXJuYWw6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBleHRlcm5hbDogdHJ1ZSxcclxuICAgICAgICBjaGlsZHJlbjogKDxJY29uIG5hbWU9XCJleHRlcm5hbC1saW5rXCIgLz4pLFxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgZXh0ZXJuYWwsIGhyZWYgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxhIGhyZWY9e2hyZWZ9IHRhcmdldD17IChleHRlcm5hbCkgPyAnX2JsYW5rJyA6ICdfc2VsZicgfT57Y2hpbGRyZW59PC9hPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19