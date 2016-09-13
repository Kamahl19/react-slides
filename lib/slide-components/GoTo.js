'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _presentation = require('../actions/presentation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        boundGoToSlide: function boundGoToSlide(slide) {
            return dispatch((0, _presentation.goToSlide)(slide));
        }
    };
};

var GoTo = (_dec = (0, _reactRedux.connect)(undefined, mapDispatchToProps), _dec(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(GoTo, _Component);

    function GoTo() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GoTo);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoTo.__proto__ || Object.getPrototypeOf(GoTo)).call.apply(_ref, [this].concat(args))), _this), _this.goTo = function () {
            var _this$props = _this.props;
            var boundGoToSlide = _this$props.boundGoToSlide;
            var slide = _this$props.slide;


            boundGoToSlide(slide);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GoTo, [{
        key: 'renderButton',
        value: function renderButton(content) {
            return _react2.default.createElement(
                'button',
                { type: 'button', onClick: this.goTo },
                content
            );
        }
    }, {
        key: 'renderLink',
        value: function renderLink(content) {
            return _react2.default.createElement(
                'a',
                { href: '#', onClick: this.goTo },
                content
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var children = _props.children;
            var type = _props.type;
            var slide = _props.slide;


            var content = children ? children : 'Go To Slide #' + (slide + 1);

            return type === 'button' ? this.renderButton(content) : this.renderLink(content);
        }
    }]);

    return GoTo;
}(_react.Component), _class2.propTypes = {
    boundGoToSlide: _react.PropTypes.func.isRequired,
    slide: _react.PropTypes.number.isRequired,
    type: _react.PropTypes.string,
    children: _react.PropTypes.node
}, _class2.defaultProps = {
    type: 'button'
}, _temp2)) || _class);
exports.default = GoTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zbGlkZS1jb21wb25lbnRzL0dvVG8uanMiXSwibmFtZXMiOlsibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJib3VuZEdvVG9TbGlkZSIsInNsaWRlIiwiR29UbyIsInVuZGVmaW5lZCIsImdvVG8iLCJwcm9wcyIsImNvbnRlbnQiLCJjaGlsZHJlbiIsInR5cGUiLCJyZW5kZXJCdXR0b24iLCJyZW5kZXJMaW5rIiwicHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJzdHJpbmciLCJub2RlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxRQUFEO0FBQUEsV0FBZTtBQUN0Q0Msd0JBQWdCLHdCQUFDQyxLQUFEO0FBQUEsbUJBQVdGLFNBQVMsNkJBQVVFLEtBQVYsQ0FBVCxDQUFYO0FBQUE7QUFEc0IsS0FBZjtBQUFBLENBQTNCOztJQUtxQkMsSSxXQURwQix5QkFBUUMsU0FBUixFQUFtQkwsa0JBQW5CLEM7Ozs7Ozs7Ozs7Ozs7O3NMQWFHTSxJLEdBQU8sWUFBTTtBQUFBLDhCQUN5QixNQUFLQyxLQUQ5QjtBQUFBLGdCQUNETCxjQURDLGVBQ0RBLGNBREM7QUFBQSxnQkFDZUMsS0FEZixlQUNlQSxLQURmOzs7QUFHVEQsMkJBQWVDLEtBQWY7QUFDSCxTOzs7OztxQ0FFWUssTyxFQUFTO0FBQ2xCLG1CQUNJO0FBQUE7QUFBQSxrQkFBUSxNQUFLLFFBQWIsRUFBc0IsU0FBUyxLQUFLRixJQUFwQztBQUEyQ0U7QUFBM0MsYUFESjtBQUdIOzs7bUNBRVVBLE8sRUFBUztBQUNoQixtQkFDSTtBQUFBO0FBQUEsa0JBQUcsTUFBSyxHQUFSLEVBQVksU0FBUyxLQUFLRixJQUExQjtBQUFpQ0U7QUFBakMsYUFESjtBQUdIOzs7aUNBRVE7QUFBQSx5QkFDNkIsS0FBS0QsS0FEbEM7QUFBQSxnQkFDR0UsUUFESCxVQUNHQSxRQURIO0FBQUEsZ0JBQ2FDLElBRGIsVUFDYUEsSUFEYjtBQUFBLGdCQUNtQlAsS0FEbkIsVUFDbUJBLEtBRG5COzs7QUFHTCxnQkFBTUssVUFBV0MsUUFBRCxHQUFhQSxRQUFiLEdBQXdCLG1CQUFtQk4sUUFBUSxDQUEzQixDQUF4Qzs7QUFFQSxtQkFBUU8sU0FBUyxRQUFWLEdBQXNCLEtBQUtDLFlBQUwsQ0FBa0JILE9BQWxCLENBQXRCLEdBQW1ELEtBQUtJLFVBQUwsQ0FBZ0JKLE9BQWhCLENBQTFEO0FBQ0g7Ozs7NkJBbkNNSyxTLEdBQVk7QUFDZlgsb0JBQWdCLGlCQUFVWSxJQUFWLENBQWVDLFVBRGhCO0FBRWZaLFdBQU8saUJBQVVhLE1BQVYsQ0FBaUJELFVBRlQ7QUFHZkwsVUFBTSxpQkFBVU8sTUFIRDtBQUlmUixjQUFVLGlCQUFVUztBQUpMLEMsVUFPWkMsWSxHQUFlO0FBQ2xCVCxVQUFNO0FBRFksQztrQkFSTE4sSSIsImZpbGUiOiJHb1RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBnb1RvU2xpZGUgfSBmcm9tICcuLi9hY3Rpb25zL3ByZXNlbnRhdGlvbic7XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgICBib3VuZEdvVG9TbGlkZTogKHNsaWRlKSA9PiBkaXNwYXRjaChnb1RvU2xpZGUoc2xpZGUpKVxyXG59KTtcclxuXHJcbkBjb25uZWN0KHVuZGVmaW5lZCwgbWFwRGlzcGF0Y2hUb1Byb3BzKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb1RvIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgYm91bmRHb1RvU2xpZGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgc2xpZGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcclxuICAgIH07XHJcblxyXG4gICAgZ29UbyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGJvdW5kR29Ub1NsaWRlLCBzbGlkZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgYm91bmRHb1RvU2xpZGUoc2xpZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckJ1dHRvbihjb250ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5nb1RvfT57Y29udGVudH08L2J1dHRvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckxpbmsoY29udGVudCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5nb1RvfT57Y29udGVudH08L2E+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgdHlwZSwgc2xpZGUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSAoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiAnR28gVG8gU2xpZGUgIycgKyAoc2xpZGUgKyAxKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICh0eXBlID09PSAnYnV0dG9uJykgPyB0aGlzLnJlbmRlckJ1dHRvbihjb250ZW50KSA6IHRoaXMucmVuZGVyTGluayhjb250ZW50KTtcclxuICAgIH1cclxufVxyXG4iXX0=