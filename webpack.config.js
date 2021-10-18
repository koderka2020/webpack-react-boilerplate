const path = require('path'); // import NodeJS path module for resolving and joining path directories

module.exports = {
  entry: './client/index.js', // set the 'entry' file or beginning point for webpack to begin transpiling
  output: {
    filename: 'bundle.js', // set the name of the 'bundled' file where webpack will bundle JS and CSS files, transpile React JSX syntax, transpile ES6/7/8 code to ES5 readabable code, transpile SCSS to CSS, etc.
    path: path.resolve(__dirname, 'build'), // using path module, tell webpack where the bundle file should be stored
  },
  devServer: {
    // https://webpack.js.org/configuration/dev-server/#devserverpublicpath-
    publicPath: '/build/',
    compress: true,
    port: 8080,
    proxy: {
      //NOTE: add additional routes that we want the 3000 server to respond to, right now only requests to "localhost:8080:/database" will be re-routed to 3000.
      '/database': 'http://localhost:3000',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?/, // for any files with .js or .jsx extensions
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  mode: process.env.NODE_ENV,
};
