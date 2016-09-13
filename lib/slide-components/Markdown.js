'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Markdown = (_temp = _class = function (_Component) {
    _inherits(Markdown, _Component);

    function Markdown() {
        _classCallCheck(this, Markdown);

        return _possibleConstructorReturn(this, (Markdown.__proto__ || Object.getPrototypeOf(Markdown)).apply(this, arguments));
    }

    _createClass(Markdown, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var external = _props.external;
            var href = _props.href;


            return _react2.default.createElement(_reactMarkdown2.default, { source: this.props.source });
        }
    }]);

    return Markdown;
}(_react.Component), _class.propTypes = {
    source: _react.PropTypes.string.isRequired
}, _temp);
exports.default = Markdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zbGlkZS1jb21wb25lbnRzL01hcmtkb3duLmpzIl0sIm5hbWVzIjpbIk1hcmtkb3duIiwicHJvcHMiLCJjaGlsZHJlbiIsImV4dGVybmFsIiwiaHJlZiIsInNvdXJjZSIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7OztpQ0FLUjtBQUFBLHlCQUNnQyxLQUFLQyxLQURyQztBQUFBLGdCQUNHQyxRQURILFVBQ0dBLFFBREg7QUFBQSxnQkFDYUMsUUFEYixVQUNhQSxRQURiO0FBQUEsZ0JBQ3VCQyxJQUR2QixVQUN1QkEsSUFEdkI7OztBQUdMLG1CQUNJLHlEQUFlLFFBQVEsS0FBS0gsS0FBTCxDQUFXSSxNQUFsQyxHQURKO0FBR0g7Ozs7NEJBVk1DLFMsR0FBWTtBQUNmRCxZQUFRLGlCQUFVRSxNQUFWLENBQWlCQztBQURWLEM7a0JBREZSLFEiLCJmaWxlIjoiTWFya2Rvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtkb3duIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgc291cmNlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGNoaWxkcmVuLCBleHRlcm5hbCwgaHJlZiB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXt0aGlzLnByb3BzLnNvdXJjZX0gLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==