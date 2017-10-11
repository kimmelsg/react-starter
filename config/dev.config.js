var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['react-hot-loader/patch', './src/base/setup/development.js'],
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },

  devServer: {
    historyApiFallback: true,
  },

  devtool: 'eval-source-map', //source-map

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.gql'],
    alias: {
      shared: path.resolve(__dirname, '../src/shared/'),
      schema: path.resolve(__dirname, '../src/base/schema'),
    },
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[path][name]__[local]',
            },
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  modules: false,
                  useBuiltIns: true,
                  targets: {
                    browsers: [
                      'Chrome >= 60',
                      'Safari >= 10.1',
                      'iOS >= 10.3',
                      'Firefox >= 54',
                      'Edge >= 15',
                    ],
                  },
                },
              ],
            ],
          },
        },
      },
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'config/base.ejs',
    }),
  ],
};
