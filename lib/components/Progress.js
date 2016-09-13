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

require('./progress.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Progress = (_temp = _class = function (_Component) {
    _inherits(Progress, _Component);

    function Progress() {
        _classCallCheck(this, Progress);

        return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
    }

    _createClass(Progress, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var slidesCount = _props.slidesCount;
            var currentSlide = _props.currentSlide;


            var items = [];

            for (var i = 0; i < slidesCount; i++) {
                var className = (0, _classnames2.default)('progress-item', {
                    filled: i === currentSlide
                });

                items.push(_react2.default.createElement('div', { className: className, key: i }));
            }

            return _react2.default.createElement(
                'div',
                { className: 'progress' },
                items
            );
        }
    }]);

    return Progress;
}(_react.Component), _class.propTypes = {
    slidesCount: _react.PropTypes.number.isRequired,
    currentSlide: _react.PropTypes.number.isRequired
}, _temp);
exports.default = Progress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2dyZXNzLmpzIl0sIm5hbWVzIjpbIlByb2dyZXNzIiwicHJvcHMiLCJzbGlkZXNDb3VudCIsImN1cnJlbnRTbGlkZSIsIml0ZW1zIiwiaSIsImNsYXNzTmFtZSIsImZpbGxlZCIsInB1c2giLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7aUNBTVI7QUFBQSx5QkFDaUMsS0FBS0MsS0FEdEM7QUFBQSxnQkFDR0MsV0FESCxVQUNHQSxXQURIO0FBQUEsZ0JBQ2dCQyxZQURoQixVQUNnQkEsWUFEaEI7OztBQUdMLGdCQUFNQyxRQUFRLEVBQWQ7O0FBRUEsaUJBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJSCxXQUFwQixFQUFpQ0csR0FBakMsRUFBc0M7QUFDbEMsb0JBQU1DLFlBQVksMEJBQUcsZUFBSCxFQUFvQjtBQUNsQ0MsNEJBQVFGLE1BQU1GO0FBRG9CLGlCQUFwQixDQUFsQjs7QUFJQUMsc0JBQU1JLElBQU4sQ0FBVyx1Q0FBSyxXQUFXRixTQUFoQixFQUEyQixLQUFLRCxDQUFoQyxHQUFYO0FBQ0g7O0FBRUQsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsVUFBZjtBQUNLRDtBQURMLGFBREo7QUFLSDs7Ozs0QkF2Qk1LLFMsR0FBWTtBQUNmUCxpQkFBYSxpQkFBVVEsTUFBVixDQUFpQkMsVUFEZjtBQUVmUixrQkFBYyxpQkFBVU8sTUFBVixDQUFpQkM7QUFGaEIsQztrQkFERlgsUSIsImZpbGUiOiJQcm9ncmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgJy4vcHJvZ3Jlc3MubGVzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9ncmVzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIHNsaWRlc0NvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgY3VycmVudFNsaWRlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHNsaWRlc0NvdW50LCBjdXJyZW50U2xpZGUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjbGFzc05hbWUgPSBjeCgncHJvZ3Jlc3MtaXRlbScsIHtcclxuICAgICAgICAgICAgICAgIGZpbGxlZDogaSA9PT0gY3VycmVudFNsaWRlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaXRlbXMucHVzaCg8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBrZXk9e2l9PjwvZGl2Pik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICB7aXRlbXN9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19