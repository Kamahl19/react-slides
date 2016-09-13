'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = require('redux');

var _reduxDevtools = require('redux-devtools');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _DevTools = require('../containers/DevTools');

var _DevTools2 = _interopRequireDefault(_DevTools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhancer = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), _DevTools2.default.instrument(), (0, _reduxDevtools.persistState)(window.location.href.match(/[?&]debug_session=([^&]+)\b/)));

function configureStore(initialState) {
    var store = (0, _redux.createStore)(_reducers2.default, initialState, enhancer);

    if (module.hot) {
        module.hot.accept('../reducers', function () {
            return store.replaceReducer(require('../reducers'));
        });
    }

    return store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yZS9jb25maWd1cmVTdG9yZS5kZXZlbG9wbWVudC5qcyJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImVuaGFuY2VyIiwiaW5zdHJ1bWVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm1hdGNoIiwiaW5pdGlhbFN0YXRlIiwic3RvcmUiLCJtb2R1bGUiLCJob3QiLCJhY2NlcHQiLCJyZXBsYWNlUmVkdWNlciIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQWdCd0JBLGM7O0FBaEJ4Qjs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1DLFdBQVcsb0JBQ2IsaURBRGEsRUFFYixtQkFBU0MsVUFBVCxFQUZhLEVBR2IsaUNBQ0lDLE9BQU9DLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCQyxLQUFyQixDQUNJLDZCQURKLENBREosQ0FIYSxDQUFqQjs7QUFVZSxTQUFTTixjQUFULENBQXdCTyxZQUF4QixFQUFzQztBQUNqRCxRQUFNQyxRQUFRLDRDQUF5QkQsWUFBekIsRUFBdUNOLFFBQXZDLENBQWQ7O0FBRUEsUUFBSVEsT0FBT0MsR0FBWCxFQUFnQjtBQUNaRCxlQUFPQyxHQUFQLENBQVdDLE1BQVgsQ0FBa0IsYUFBbEIsRUFBaUM7QUFBQSxtQkFDN0JILE1BQU1JLGNBQU4sQ0FBcUJDLFFBQVEsYUFBUixDQUFyQixDQUQ2QjtBQUFBLFNBQWpDO0FBR0g7O0FBRUQsV0FBT0wsS0FBUDtBQUNIIiwiZmlsZSI6ImNvbmZpZ3VyZVN0b3JlLmRldmVsb3BtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgcGVyc2lzdFN0YXRlIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMnO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgRGV2VG9vbHMgZnJvbSAnLi4vY29udGFpbmVycy9EZXZUb29scyc7XHJcblxyXG5jb25zdCBlbmhhbmNlciA9IGNvbXBvc2UoXHJcbiAgICBhcHBseU1pZGRsZXdhcmUodGh1bmspLFxyXG4gICAgRGV2VG9vbHMuaW5zdHJ1bWVudCgpLFxyXG4gICAgcGVyc2lzdFN0YXRlKFxyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLm1hdGNoKFxyXG4gICAgICAgICAgICAvWz8mXWRlYnVnX3Nlc3Npb249KFteJl0rKVxcYi9cclxuICAgICAgICApXHJcbiAgICApXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xyXG5cclxuICAgIGlmIChtb2R1bGUuaG90KSB7XHJcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4uL3JlZHVjZXJzJywgKCkgPT5cclxuICAgICAgICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIocmVxdWlyZSgnLi4vcmVkdWNlcnMnKSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG4iXX0=