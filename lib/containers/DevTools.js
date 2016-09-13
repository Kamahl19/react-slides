'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = require('redux-devtools');

var _reduxDevtoolsLogMonitor = require('redux-devtools-log-monitor');

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = require('redux-devtools-dock-monitor');

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(
    _reduxDevtoolsDockMonitor2.default,
    { defaultIsVisible: false, toggleVisibilityKey: 'ctrl-h', changePositionKey: 'ctrl-q' },
    _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, null)
));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250YWluZXJzL0RldlRvb2xzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlLG1DQUNYO0FBQUE7QUFBQSxNQUFhLGtCQUFrQixLQUEvQixFQUFzQyxxQkFBb0IsUUFBMUQsRUFBbUUsbUJBQWtCLFFBQXJGO0FBQ0k7QUFESixDQURXLEMiLCJmaWxlIjoiRGV2VG9vbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzJztcclxuaW1wb3J0IExvZ01vbml0b3IgZnJvbSAncmVkdXgtZGV2dG9vbHMtbG9nLW1vbml0b3InO1xyXG5pbXBvcnQgRG9ja01vbml0b3IgZnJvbSAncmVkdXgtZGV2dG9vbHMtZG9jay1tb25pdG9yJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZURldlRvb2xzKFxyXG4gICAgPERvY2tNb25pdG9yIGRlZmF1bHRJc1Zpc2libGU9e2ZhbHNlfSB0b2dnbGVWaXNpYmlsaXR5S2V5PVwiY3RybC1oXCIgY2hhbmdlUG9zaXRpb25LZXk9XCJjdHJsLXFcIj5cclxuICAgICAgICA8TG9nTW9uaXRvciAvPlxyXG4gICAgPC9Eb2NrTW9uaXRvcj5cclxuKTtcclxuIl19