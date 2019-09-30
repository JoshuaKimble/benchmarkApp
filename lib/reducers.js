"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStuff = getStuff;
exports.getMessage = getMessage;
exports.default = void 0;

function entities(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

function getStuff(state) {
  return state.stuff;
}

function getMessage(state) {
  return state.msg;
}

var _default = entities;
exports.default = _default;