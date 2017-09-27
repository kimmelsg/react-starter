var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: ['react-hot-loader/patch', './src/development.js'],
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
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
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
      template: 'webpack/base.ejs',
    }),
  ],
};
