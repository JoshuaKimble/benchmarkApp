"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _server = _interopRequireDefault(require("react-dom/server"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _reducers = _interopRequireDefault(require("../reducers"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderApp(initialState) {
  const store = (0, _redux.createStore)(_reducers.default, initialState);
  return _server.default.renderToString(_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, _react.default.createElement(_app.default, null)));
}

var _default = renderApp;
exports.default = _default;