'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2; /* eslint no-new-func:0 */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCodemirror = require('react-codemirror');

var _reactCodemirror2 = _interopRequireDefault(_reactCodemirror);

var _babelStandalone = require('babel-standalone');

require('codemirror/addon/hint/show-hint');

require('codemirror/addon/hint/javascript-hint');

require('codemirror/addon/selection/active-line');

require('codemirror/addon/edit/closebrackets');

require('codemirror/addon/display/fullscreen');

require('codemirror/mode/javascript/javascript');

require('codemirror/lib/codemirror.css');

require('codemirror/addon/hint/show-hint.css');

require('codemirror/addon/display/fullscreen.css');

require('codemirror/theme/monokai.css');

require('./code.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function babelTransform(code) {
    return (0, _babelStandalone.transform)(code, { presets: ['es2015', 'stage-0', 'react'] }).code;
}

var Code = (_temp2 = _class = function (_Component) {
    _inherits(Code, _Component);

    function Code() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Code);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Code.__proto__ || Object.getPrototypeOf(Code)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            code: _this.props.value
        }, _this.onChange = function (code) {
            _this.setState({ code: code });
        }, _this.codeMirrorOptions = {
            mode: _this.props.language,
            theme: _this.props.theme,
            extraKeys: {
                'Ctrl-Space': 'autocomplete',
                'Shift-F9': function ShiftF9() {
                    if (_this.props.language !== 'javascript') {
                        return;
                    }

                    var code = _this.props.useBabel ? babelTransform(_this.state.code) : _this.state.code;

                    new Function(code)();
                },
                'Shift-F11': function ShiftF11(cm) {
                    cm.setOption('fullScreen', !cm.getOption('fullScreen'));
                },
                Esc: function Esc(cm) {
                    if (cm.getOption('fullScreen')) {
                        cm.setOption('fullScreen', false);
                    }
                }
            },
            styleActiveLine: true,
            autoCloseBrackets: true
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Code, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.value !== nextProps.value) {
                this.refs.codeMirror.getCodeMirror().setValue(nextProps.value);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'code' },
                _react2.default.createElement(_reactCodemirror2.default, {
                    value: this.state.code,
                    onChange: this.onChange,
                    options: this.codeMirrorOptions,
                    ref: 'codeMirror'
                })
            );
        }
    }]);

    return Code;
}(_react.Component), _class.propTypes = {
    value: _react.PropTypes.string,
    language: _react.PropTypes.string,
    theme: _react.PropTypes.string,
    useBabel: _react.PropTypes.bool
}, _class.defaultProps = {
    value: '',
    language: 'javascript',
    theme: 'monokai',
    useBabel: true
}, _temp2);
exports.default = Code;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zbGlkZS1jb21wb25lbnRzL0NvZGUuanMiXSwibmFtZXMiOlsiYmFiZWxUcmFuc2Zvcm0iLCJjb2RlIiwicHJlc2V0cyIsIkNvZGUiLCJzdGF0ZSIsInByb3BzIiwidmFsdWUiLCJvbkNoYW5nZSIsInNldFN0YXRlIiwiY29kZU1pcnJvck9wdGlvbnMiLCJtb2RlIiwibGFuZ3VhZ2UiLCJ0aGVtZSIsImV4dHJhS2V5cyIsInVzZUJhYmVsIiwiRnVuY3Rpb24iLCJjbSIsInNldE9wdGlvbiIsImdldE9wdGlvbiIsIkVzYyIsInN0eWxlQWN0aXZlTGluZSIsImF1dG9DbG9zZUJyYWNrZXRzIiwibmV4dFByb3BzIiwicmVmcyIsImNvZGVNaXJyb3IiLCJnZXRDb2RlTWlycm9yIiwic2V0VmFsdWUiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7b0JBQUE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQUVBLFNBQVNBLGNBQVQsQ0FBd0JDLElBQXhCLEVBQThCO0FBQzFCLFdBQU8sZ0NBQVVBLElBQVYsRUFBZ0IsRUFBRUMsU0FBUyxDQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLE9BQXRCLENBQVgsRUFBaEIsRUFBNkRELElBQXBFO0FBQ0g7O0lBRW9CRSxJOzs7Ozs7Ozs7Ozs7OztzTEFlakJDLEssR0FBUTtBQUNKSCxrQkFBTSxNQUFLSSxLQUFMLENBQVdDO0FBRGIsUyxRQVVSQyxRLEdBQVcsVUFBQ04sSUFBRCxFQUFVO0FBQ2pCLGtCQUFLTyxRQUFMLENBQWMsRUFBRVAsVUFBRixFQUFkO0FBQ0gsUyxRQUVEUSxpQixHQUFvQjtBQUNoQkMsa0JBQU0sTUFBS0wsS0FBTCxDQUFXTSxRQUREO0FBRWhCQyxtQkFBTyxNQUFLUCxLQUFMLENBQVdPLEtBRkY7QUFHaEJDLHVCQUFXO0FBQ1AsOEJBQWMsY0FEUDtBQUVQLDRCQUFZLG1CQUFNO0FBQ2Qsd0JBQUksTUFBS1IsS0FBTCxDQUFXTSxRQUFYLEtBQXdCLFlBQTVCLEVBQTBDO0FBQ3RDO0FBQ0g7O0FBRUQsd0JBQU1WLE9BQVEsTUFBS0ksS0FBTCxDQUFXUyxRQUFaLEdBQXdCZCxlQUFlLE1BQUtJLEtBQUwsQ0FBV0gsSUFBMUIsQ0FBeEIsR0FBMEQsTUFBS0csS0FBTCxDQUFXSCxJQUFsRjs7QUFFQSx3QkFBSWMsUUFBSixDQUFhZCxJQUFiO0FBQ0gsaUJBVk07QUFXUCw2QkFBYSxrQkFBQ2UsRUFBRCxFQUFRO0FBQ2pCQSx1QkFBR0MsU0FBSCxDQUFhLFlBQWIsRUFBMkIsQ0FBQ0QsR0FBR0UsU0FBSCxDQUFhLFlBQWIsQ0FBNUI7QUFDSCxpQkFiTTtBQWNQQyxxQkFBSyxhQUFDSCxFQUFELEVBQVE7QUFDVCx3QkFBSUEsR0FBR0UsU0FBSCxDQUFhLFlBQWIsQ0FBSixFQUFnQztBQUM1QkYsMkJBQUdDLFNBQUgsQ0FBYSxZQUFiLEVBQTJCLEtBQTNCO0FBQ0g7QUFDSjtBQWxCTSxhQUhLO0FBdUJoQkcsNkJBQWlCLElBdkJEO0FBd0JoQkMsK0JBQW1CO0FBeEJILFM7Ozs7O2tEQVZNQyxTLEVBQVc7QUFDakMsZ0JBQUksS0FBS2pCLEtBQUwsQ0FBV0MsS0FBWCxLQUFxQmdCLFVBQVVoQixLQUFuQyxFQUEwQztBQUN0QyxxQkFBS2lCLElBQUwsQ0FBVUMsVUFBVixDQUFxQkMsYUFBckIsR0FBcUNDLFFBQXJDLENBQThDSixVQUFVaEIsS0FBeEQ7QUFDSDtBQUNKOzs7aUNBaUNRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsTUFBZjtBQUNJO0FBQ0ksMkJBQU8sS0FBS0YsS0FBTCxDQUFXSCxJQUR0QjtBQUVJLDhCQUFVLEtBQUtNLFFBRm5CO0FBR0ksNkJBQVMsS0FBS0UsaUJBSGxCO0FBSUkseUJBQUk7QUFKUjtBQURKLGFBREo7QUFVSDs7Ozs0QkFsRU1rQixTLEdBQVk7QUFDZnJCLFdBQU8saUJBQVVzQixNQURGO0FBRWZqQixjQUFVLGlCQUFVaUIsTUFGTDtBQUdmaEIsV0FBTyxpQkFBVWdCLE1BSEY7QUFJZmQsY0FBVSxpQkFBVWU7QUFKTCxDLFNBT1pDLFksR0FBZTtBQUNsQnhCLFdBQU8sRUFEVztBQUVsQkssY0FBVSxZQUZRO0FBR2xCQyxXQUFPLFNBSFc7QUFJbEJFLGNBQVU7QUFKUSxDO2tCQVJMWCxJIiwiZmlsZSI6IkNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgbm8tbmV3LWZ1bmM6MCAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDb2RlTWlycm9yIGZyb20gJ3JlYWN0LWNvZGVtaXJyb3InO1xyXG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tICdiYWJlbC1zdGFuZGFsb25lJztcclxuXHJcbmltcG9ydCAnY29kZW1pcnJvci9hZGRvbi9oaW50L3Nob3ctaGludCc7XHJcbmltcG9ydCAnY29kZW1pcnJvci9hZGRvbi9oaW50L2phdmFzY3JpcHQtaGludCc7XHJcbmltcG9ydCAnY29kZW1pcnJvci9hZGRvbi9zZWxlY3Rpb24vYWN0aXZlLWxpbmUnO1xyXG5pbXBvcnQgJ2NvZGVtaXJyb3IvYWRkb24vZWRpdC9jbG9zZWJyYWNrZXRzJztcclxuaW1wb3J0ICdjb2RlbWlycm9yL2FkZG9uL2Rpc3BsYXkvZnVsbHNjcmVlbic7XHJcbmltcG9ydCAnY29kZW1pcnJvci9tb2RlL2phdmFzY3JpcHQvamF2YXNjcmlwdCc7XHJcblxyXG5pbXBvcnQgJ2NvZGVtaXJyb3IvbGliL2NvZGVtaXJyb3IuY3NzJztcclxuaW1wb3J0ICdjb2RlbWlycm9yL2FkZG9uL2hpbnQvc2hvdy1oaW50LmNzcyc7XHJcbmltcG9ydCAnY29kZW1pcnJvci9hZGRvbi9kaXNwbGF5L2Z1bGxzY3JlZW4uY3NzJztcclxuaW1wb3J0ICdjb2RlbWlycm9yL3RoZW1lL21vbm9rYWkuY3NzJztcclxuXHJcbmltcG9ydCAnLi9jb2RlLmxlc3MnO1xyXG5cclxuZnVuY3Rpb24gYmFiZWxUcmFuc2Zvcm0oY29kZSkge1xyXG4gICAgcmV0dXJuIHRyYW5zZm9ybShjb2RlLCB7IHByZXNldHM6IFsnZXMyMDE1JywgJ3N0YWdlLTAnLCAncmVhY3QnXSB9KS5jb2RlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XHJcbiAgICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgbGFuZ3VhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgdGhlbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgdXNlQmFiZWw6IFByb3BUeXBlcy5ib29sLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICBsYW5ndWFnZTogJ2phdmFzY3JpcHQnLFxyXG4gICAgICAgIHRoZW1lOiAnbW9ub2thaScsXHJcbiAgICAgICAgdXNlQmFiZWw6IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGNvZGU6IHRoaXMucHJvcHMudmFsdWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudmFsdWUgIT09IG5leHRQcm9wcy52YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZnMuY29kZU1pcnJvci5nZXRDb2RlTWlycm9yKCkuc2V0VmFsdWUobmV4dFByb3BzLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UgPSAoY29kZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb2RlIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvZGVNaXJyb3JPcHRpb25zID0ge1xyXG4gICAgICAgIG1vZGU6IHRoaXMucHJvcHMubGFuZ3VhZ2UsXHJcbiAgICAgICAgdGhlbWU6IHRoaXMucHJvcHMudGhlbWUsXHJcbiAgICAgICAgZXh0cmFLZXlzOiB7XHJcbiAgICAgICAgICAgICdDdHJsLVNwYWNlJzogJ2F1dG9jb21wbGV0ZScsXHJcbiAgICAgICAgICAgICdTaGlmdC1GOSc6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxhbmd1YWdlICE9PSAnamF2YXNjcmlwdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29kZSA9ICh0aGlzLnByb3BzLnVzZUJhYmVsKSA/IGJhYmVsVHJhbnNmb3JtKHRoaXMuc3RhdGUuY29kZSkgOiB0aGlzLnN0YXRlLmNvZGU7XHJcblxyXG4gICAgICAgICAgICAgICAgbmV3IEZ1bmN0aW9uKGNvZGUpKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdTaGlmdC1GMTEnOiAoY20pID0+IHtcclxuICAgICAgICAgICAgICAgIGNtLnNldE9wdGlvbignZnVsbFNjcmVlbicsICFjbS5nZXRPcHRpb24oJ2Z1bGxTY3JlZW4nKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEVzYzogKGNtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY20uZ2V0T3B0aW9uKCdmdWxsU2NyZWVuJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbS5zZXRPcHRpb24oJ2Z1bGxTY3JlZW4nLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdHlsZUFjdGl2ZUxpbmU6IHRydWUsXHJcbiAgICAgICAgYXV0b0Nsb3NlQnJhY2tldHM6IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvZGVcIj5cclxuICAgICAgICAgICAgICAgIDxDb2RlTWlycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY29kZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLmNvZGVNaXJyb3JPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cImNvZGVNaXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=