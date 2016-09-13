'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Timer = require('./Timer');

var _Timer2 = _interopRequireDefault(_Timer);

var _SlideNotes = require('./SlideNotes');

var _SlideNotes2 = _interopRequireDefault(_SlideNotes);

require('./presenter.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Presenter = (_temp = _class = function (_Component) {
    _inherits(Presenter, _Component);

    function Presenter() {
        _classCallCheck(this, Presenter);

        return _possibleConstructorReturn(this, (Presenter.__proto__ || Object.getPrototypeOf(Presenter)).apply(this, arguments));
    }

    _createClass(Presenter, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var active = _props.active;
            var children = _props.children;
            var notes = _props.notes;


            if (!active) {
                return _react2.default.createElement(
                    'div',
                    null,
                    children
                );
            }

            return _react2.default.createElement(
                'div',
                { className: 'presenter' },
                _react2.default.createElement(_Timer2.default, null),
                children,
                _react2.default.createElement(_SlideNotes2.default, { notes: notes })
            );
        }
    }]);

    return Presenter;
}(_react.Component), _class.propTypes = {
    active: _react.PropTypes.bool.isRequired,
    children: _react.PropTypes.node.isRequired,
    notes: _react.PropTypes.array
}, _class.defaultProps = {
    notes: []
}, _temp);
exports.default = Presenter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1ByZXNlbnRlci5qcyJdLCJuYW1lcyI6WyJQcmVzZW50ZXIiLCJwcm9wcyIsImFjdGl2ZSIsImNoaWxkcmVuIiwibm90ZXMiLCJwcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJhcnJheSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7aUNBV1I7QUFBQSx5QkFDK0IsS0FBS0MsS0FEcEM7QUFBQSxnQkFDR0MsTUFESCxVQUNHQSxNQURIO0FBQUEsZ0JBQ1dDLFFBRFgsVUFDV0EsUUFEWDtBQUFBLGdCQUNxQkMsS0FEckIsVUFDcUJBLEtBRHJCOzs7QUFHTCxnQkFBSSxDQUFDRixNQUFMLEVBQWE7QUFDVCx1QkFDSTtBQUFBO0FBQUE7QUFDS0M7QUFETCxpQkFESjtBQUtIOztBQUVELG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFVLFdBQWY7QUFDSSxvRUFESjtBQUVLQSx3QkFGTDtBQUdJLHNFQUFZLE9BQU9DLEtBQW5CO0FBSEosYUFESjtBQU9IOzs7OzRCQTVCTUMsUyxHQUFZO0FBQ2ZILFlBQVEsaUJBQVVJLElBQVYsQ0FBZUMsVUFEUjtBQUVmSixjQUFVLGlCQUFVSyxJQUFWLENBQWVELFVBRlY7QUFHZkgsV0FBTyxpQkFBVUs7QUFIRixDLFNBTVpDLFksR0FBZTtBQUNsQk4sV0FBTztBQURXLEM7a0JBUExKLFMiLCJmaWxlIjoiUHJlc2VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lcic7XHJcbmltcG9ydCBTbGlkZU5vdGVzIGZyb20gJy4vU2xpZGVOb3Rlcyc7XHJcbmltcG9ydCAnLi9wcmVzZW50ZXIubGVzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVzZW50ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgbm90ZXM6IFByb3BUeXBlcy5hcnJheSxcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgICAgICBub3RlczogW10sXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGFjdGl2ZSwgY2hpbGRyZW4sIG5vdGVzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBpZiAoIWFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlc2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8VGltZXIgLz5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDxTbGlkZU5vdGVzIG5vdGVzPXtub3Rlc30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=