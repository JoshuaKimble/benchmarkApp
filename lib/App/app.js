"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _reducers = require("../reducers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App({
  stuff,
  msg
}) {
  return _react.default.createElement("div", {
    style: {
      padding: '15px'
    }
  }, _react.default.createElement("h1", null, msg), stuff.map((list, index) => _react.default.createElement("div", {
    key: index,
    style: {
      width: '10%',
      float: 'left',
      padding: '15px'
    }
  }, _react.default.createElement("h2", null, "Stuff index: ", `${index}`), list.map((item, pos) => _react.default.createElement("div", {
    key: pos
  }, _react.default.createElement("h3", null, item.title), _react.default.createElement("p", null, item.body))))));
}

const mapStateToProps = state => ({
  msg: (0, _reducers.getMessage)(state),
  stuff: (0, _reducers.getStuff)(state)
});

var _default = (0, _reactRedux.connect)(mapStateToProps)(App);

exports.default = _default;