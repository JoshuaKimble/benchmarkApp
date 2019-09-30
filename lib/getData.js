"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function massage(data) {
  const newData = data.map(item => ({ ...item,
    body: item.body.toUpperCase()
  }));
  newData.sort((a, b) => a.title.length - b.title.length);
  return newData;
}

function getData() {
  const promises = [];

  for (let index = 0; index < 30; index++) {
    promises.push((0, _nodeFetch.default)('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => massage(data)));
  }

  return Promise.all(promises);
}

var _default = getData;
exports.default = _default;