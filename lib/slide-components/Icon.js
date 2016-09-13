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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = (_temp = _class = function (_Component) {
    _inherits(Icon, _Component);

    function Icon() {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    _createClass(Icon, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var name = _props.name;
            var size = _props.size;


            var className = (0, _classnames2.default)('fa', 'fa-' + name, _defineProperty({}, 'fa-' + size, !!size));

            return _react2.default.createElement('i', { className: className });
        }
    }]);

    return Icon;
}(_react.Component), _class.propTypes = {
    name: _react.PropTypes.string.isRequired,
    size: _react.PropTypes.string
}, _temp);
exports.default = Icon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zbGlkZS1jb21wb25lbnRzL0ljb24uanMiXSwibmFtZXMiOlsiSWNvbiIsInByb3BzIiwibmFtZSIsInNpemUiLCJjbGFzc05hbWUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7OztpQ0FNUjtBQUFBLHlCQUNrQixLQUFLQyxLQUR2QjtBQUFBLGdCQUNHQyxJQURILFVBQ0dBLElBREg7QUFBQSxnQkFDU0MsSUFEVCxVQUNTQSxJQURUOzs7QUFHTCxnQkFBTUMsWUFBWSwwQkFDZCxJQURjLFVBRVJGLElBRlEsOEJBSUhDLElBSkcsRUFJTSxDQUFDLENBQUNBLElBSlIsRUFBbEI7O0FBUUEsbUJBQ0kscUNBQUcsV0FBV0MsU0FBZCxHQURKO0FBR0g7Ozs7NEJBbkJNQyxTLEdBQVk7QUFDZkgsVUFBTSxpQkFBVUksTUFBVixDQUFpQkMsVUFEUjtBQUVmSixVQUFNLGlCQUFVRztBQUZELEM7a0JBREZOLEkiLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCBzaXplIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjeChcclxuICAgICAgICAgICAgJ2ZhJyxcclxuICAgICAgICAgICAgYGZhLSR7bmFtZX1gLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBbYGZhLSR7c2l6ZX1gXTogISFzaXplXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==