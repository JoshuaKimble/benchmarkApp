"use strict";

var _express = _interopRequireDefault(require("express"));

var _getData = _interopRequireDefault(require("./getData"));

var _App = _interopRequireDefault(require("./App"));

var _util = require("util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json({
  limit: '1mb'
}));
const port = 3000;

const dataAgg = async (req, res, next) => {
  const initialState = {
    msg: 'Data Agg Middleware says Hi.'
  };
  const stuff = await (0, _getData.default)();
  initialState.stuff = stuff;
  req.initialState = initialState;
  next();
};

app.get('/', dataAgg, (req, res) => {
  return res.send((0, _App.default)(req.initialState));
});
app.get('/data', dataAgg, (req, res) => {
  return res.send(req.initialState);
});
app.post('/post', (req, res) => {
  return res.send((0, _App.default)(req.body));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));