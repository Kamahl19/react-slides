'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DevTools = require('./DevTools');

var _DevTools2 = _interopRequireDefault(_DevTools);

var _Presentation = require('./Presentation');

var _Presentation2 = _interopRequireDefault(_Presentation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (_temp = _class = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Presentation2.default, { slides: this.props.slides }),
                process.env.NODE_ENV !== 'production' ? _react2.default.createElement(_DevTools2.default, null) : undefined
            );
        }
    }]);

    return App;
}(_react.Component), _class.propTypes = {
    slides: _react.PropTypes.array.isRequired
}, _temp);
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250YWluZXJzL0FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInNsaWRlcyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInVuZGVmaW5lZCIsInByb3BUeXBlcyIsImFycmF5IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsRzs7Ozs7Ozs7Ozs7aUNBS1I7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSSx3RUFBYyxRQUFRLEtBQUtDLEtBQUwsQ0FBV0MsTUFBakMsR0FESjtBQUVPQyx3QkFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTFCLEdBQTBDLHVEQUExQyxHQUF5REM7QUFGL0QsYUFESjtBQU1IOzs7OzRCQVhNQyxTLEdBQVk7QUFDZkwsWUFBUSxpQkFBVU0sS0FBVixDQUFnQkM7QUFEVCxDO2tCQURGVCxHIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IERldlRvb2xzIGZyb20gJy4vRGV2VG9vbHMnO1xyXG5pbXBvcnQgUHJlc2VudGF0aW9uIGZyb20gJy4vUHJlc2VudGF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIHNsaWRlczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFByZXNlbnRhdGlvbiBzbGlkZXM9e3RoaXMucHJvcHMuc2xpZGVzfSAvPlxyXG4gICAgICAgICAgICAgICAgeyAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgPyA8RGV2VG9vbHMgLz4gOiB1bmRlZmluZWQgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==