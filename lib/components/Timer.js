'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./timer.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function secondsTohhmmss(totalSec) {
    var hours = parseInt(totalSec / 3600, 10) % 24;
    var minutes = parseInt(totalSec / 60, 10) % 60;
    var seconds = totalSec % 60;

    var hoursStr = hours < 10 ? '0' + hours : hours;
    var minutesStr = minutes < 10 ? '0' + minutes : minutes;
    var secondsStr = seconds < 10 ? '0' + seconds : seconds;

    return hoursStr + ':' + minutesStr + ':' + secondsStr;
}

var Timer = function (_Component) {
    _inherits(Timer, _Component);

    function Timer(props) {
        _classCallCheck(this, Timer);

        var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

        _this.state = {
            seconds: 0
        };
        return _this;
    }

    _createClass(Timer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.interval = setInterval(function () {
                _this2.setState({
                    seconds: ++_this2.state.seconds
                });
            }, 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.interval);
            this.interval = null;
        }
    }, {
        key: 'render',
        value: function render() {
            var seconds = this.state.seconds;


            return _react2.default.createElement(
                'div',
                { className: 'timer' },
                secondsTohhmmss(seconds)
            );
        }
    }]);

    return Timer;
}(_react.Component);

exports.default = Timer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1RpbWVyLmpzIl0sIm5hbWVzIjpbInNlY29uZHNUb2hobW1zcyIsInRvdGFsU2VjIiwiaG91cnMiLCJwYXJzZUludCIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiaG91cnNTdHIiLCJtaW51dGVzU3RyIiwic2Vjb25kc1N0ciIsIlRpbWVyIiwicHJvcHMiLCJzdGF0ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzZXRTdGF0ZSIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxlQUFULENBQXlCQyxRQUF6QixFQUFtQztBQUMvQixRQUFNQyxRQUFRQyxTQUFTRixXQUFXLElBQXBCLEVBQTBCLEVBQTFCLElBQWdDLEVBQTlDO0FBQ0EsUUFBTUcsVUFBVUQsU0FBU0YsV0FBVyxFQUFwQixFQUF3QixFQUF4QixJQUE4QixFQUE5QztBQUNBLFFBQU1JLFVBQVVKLFdBQVcsRUFBM0I7O0FBRUEsUUFBTUssV0FBWUosUUFBUSxFQUFULFNBQW1CQSxLQUFuQixHQUE2QkEsS0FBOUM7QUFDQSxRQUFNSyxhQUFjSCxVQUFVLEVBQVgsU0FBcUJBLE9BQXJCLEdBQWlDQSxPQUFwRDtBQUNBLFFBQU1JLGFBQWNILFVBQVUsRUFBWCxTQUFxQkEsT0FBckIsR0FBaUNBLE9BQXBEOztBQUVBLFdBQVVDLFFBQVYsU0FBc0JDLFVBQXRCLFNBQW9DQyxVQUFwQztBQUNIOztJQUVvQkMsSzs7O0FBQ2pCLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1RBLEtBRFM7O0FBR2YsY0FBS0MsS0FBTCxHQUFhO0FBQ1ROLHFCQUFTO0FBREEsU0FBYjtBQUhlO0FBTWxCOzs7OzRDQUVtQjtBQUFBOztBQUNoQixpQkFBS08sUUFBTCxHQUFnQkMsWUFBWSxZQUFNO0FBQzlCLHVCQUFLQyxRQUFMLENBQWM7QUFDVlQsNkJBQVMsRUFBRSxPQUFLTSxLQUFMLENBQVdOO0FBRFosaUJBQWQ7QUFHSCxhQUplLEVBSWIsSUFKYSxDQUFoQjtBQUtIOzs7K0NBRXNCO0FBQ25CVSwwQkFBYyxLQUFLSCxRQUFuQjtBQUNBLGlCQUFLQSxRQUFMLEdBQWdCLElBQWhCO0FBQ0g7OztpQ0FFUTtBQUFBLGdCQUNHUCxPQURILEdBQ2UsS0FBS00sS0FEcEIsQ0FDR04sT0FESDs7O0FBR0wsbUJBQ0k7QUFBQTtBQUFBLGtCQUFLLFdBQVUsT0FBZjtBQUNLTCxnQ0FBZ0JLLE9BQWhCO0FBREwsYUFESjtBQUtIOzs7Ozs7a0JBOUJnQkksSyIsImZpbGUiOiJUaW1lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi90aW1lci5sZXNzJztcclxuXHJcbmZ1bmN0aW9uIHNlY29uZHNUb2hobW1zcyh0b3RhbFNlYykge1xyXG4gICAgY29uc3QgaG91cnMgPSBwYXJzZUludCh0b3RhbFNlYyAvIDM2MDAsIDEwKSAlIDI0O1xyXG4gICAgY29uc3QgbWludXRlcyA9IHBhcnNlSW50KHRvdGFsU2VjIC8gNjAsIDEwKSAlIDYwO1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IHRvdGFsU2VjICUgNjA7XHJcblxyXG4gICAgY29uc3QgaG91cnNTdHIgPSAoaG91cnMgPCAxMCkgPyBgMCR7aG91cnN9YCA6IGhvdXJzO1xyXG4gICAgY29uc3QgbWludXRlc1N0ciA9IChtaW51dGVzIDwgMTApID8gYDAke21pbnV0ZXN9YCA6IG1pbnV0ZXM7XHJcbiAgICBjb25zdCBzZWNvbmRzU3RyID0gKHNlY29uZHMgPCAxMCkgPyBgMCR7c2Vjb25kc31gIDogc2Vjb25kcztcclxuXHJcbiAgICByZXR1cm4gYCR7aG91cnNTdHJ9OiR7bWludXRlc1N0cn06JHtzZWNvbmRzU3RyfWA7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzZWNvbmRzOiAwLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRzOiArK3RoaXMuc3RhdGUuc2Vjb25kcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgICAgICB0aGlzLmludGVydmFsID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzZWNvbmRzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVyXCI+XHJcbiAgICAgICAgICAgICAgICB7c2Vjb25kc1RvaGhtbXNzKHNlY29uZHMpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==