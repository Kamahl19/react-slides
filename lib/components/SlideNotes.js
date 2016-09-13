'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./slidenotes.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SlideNotes = (_temp = _class = function (_Component) {
    _inherits(SlideNotes, _Component);

    function SlideNotes() {
        _classCallCheck(this, SlideNotes);

        return _possibleConstructorReturn(this, (SlideNotes.__proto__ || Object.getPrototypeOf(SlideNotes)).apply(this, arguments));
    }

    _createClass(SlideNotes, [{
        key: 'render',
        value: function render() {
            var notes = this.props.notes;


            if (!notes.length) {
                return _react2.default.createElement('div', null);
            }

            return _react2.default.createElement(
                'div',
                { className: 'slide-notes' },
                _react2.default.createElement(
                    'ul',
                    null,
                    notes.map(function (note, idx) {
                        return _react2.default.createElement(
                            'li',
                            { key: idx },
                            note
                        );
                    })
                )
            );
        }
    }]);

    return SlideNotes;
}(_react.Component), _class.propTypes = {
    notes: _react.PropTypes.array.isRequired
}, _temp);
exports.default = SlideNotes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1NsaWRlTm90ZXMuanMiXSwibmFtZXMiOlsiU2xpZGVOb3RlcyIsIm5vdGVzIiwicHJvcHMiLCJsZW5ndGgiLCJtYXAiLCJub3RlIiwiaWR4IiwicHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7O2lDQUtSO0FBQUEsZ0JBQ0dDLEtBREgsR0FDYSxLQUFLQyxLQURsQixDQUNHRCxLQURIOzs7QUFHTCxnQkFBSSxDQUFDQSxNQUFNRSxNQUFYLEVBQW1CO0FBQ2YsdUJBQ0ksMENBREo7QUFHSDs7QUFFRCxtQkFDSTtBQUFBO0FBQUEsa0JBQUssV0FBVSxhQUFmO0FBQ0k7QUFBQTtBQUFBO0FBQ0tGLDBCQUFNRyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQO0FBQUEsK0JBQ1A7QUFBQTtBQUFBLDhCQUFJLEtBQUtBLEdBQVQ7QUFBZUQ7QUFBZix5QkFETztBQUFBLHFCQUFWO0FBREw7QUFESixhQURKO0FBU0g7Ozs7NEJBdEJNRSxTLEdBQVk7QUFDZk4sV0FBTyxpQkFBVU8sS0FBVixDQUFnQkM7QUFEUixDO2tCQURGVCxVIiwiZmlsZSI6IlNsaWRlTm90ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9zbGlkZW5vdGVzLmxlc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVOb3RlcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIG5vdGVzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbm90ZXMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGlmICghbm90ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLW5vdGVzXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge25vdGVzLm1hcCgobm90ZSwgaWR4KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpZHh9Pntub3RlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIl19