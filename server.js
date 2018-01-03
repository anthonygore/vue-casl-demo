const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const compiler = webpack(require('./webpack.config'));
const express = require("express");
const path = require("path");

const app = express();

app.use(middleware(compiler, {
  publicPath : "/dist/"
}));

app.use(express.static(path.join(__dirname, "dist")));

app.use('/', require('./resources/routes'));

app.listen(3000);
