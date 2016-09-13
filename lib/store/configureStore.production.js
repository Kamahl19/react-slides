'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhancer = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default));

function configureStore(initialState) {
    return (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yZS9jb25maWd1cmVTdG9yZS5wcm9kdWN0aW9uLmpzIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiZW5oYW5jZXIiLCJpbml0aWFsU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQVF3QkEsYzs7QUFSeEI7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUMsV0FBVyxvQkFDYixpREFEYSxDQUFqQjs7QUFJZSxTQUFTRCxjQUFULENBQXdCRSxZQUF4QixFQUFzQztBQUNqRCxXQUFPLDRDQUF5QkEsWUFBekIsRUFBdUNELFFBQXZDLENBQVA7QUFDSCIsImZpbGUiOiJjb25maWd1cmVTdG9yZS5wcm9kdWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcclxuXHJcbmNvbnN0IGVuaGFuY2VyID0gY29tcG9zZShcclxuICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaylcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGVuaGFuY2VyKTtcclxufVxyXG4iXX0=