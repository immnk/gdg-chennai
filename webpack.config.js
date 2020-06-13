const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// eslint-disable-next-line import/no-dynamic-require
const pkg = require(path.resolve(__dirname, 'package.json'));

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'static/js/[name].[hash:8].js'
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.jsx'],
      // alias: {
      //   components: path.resolve(__dirname, 'src/components'),
      //   pages: path.resolve(__dirname, 'src/pages'),
      //   'react-dom': '@hot-loader/react-dom'
      // },
      symlinks: false
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true,
          extractComments: false,
          cache: true
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
    module: {
      rules: [
        {
          test: /(\.jsx|\.js)$/,
          include: path.resolve(__dirname, 'src'),
          exclude: '/node_modules/',
          use: [
            {
              loader: 'babel-loader?cacheDirectory=true',
              options: {
                rootMode: 'upward'
              }
            },
            isProd
              ? false
              : {
                  loader: 'eslint-loader',
                  options: {
                    emitWarning: true
                  }
                }
          ].filter(Boolean)
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, 'src'),
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]-[local]'
                },
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        },
        {
          test: /(\.gif|\.jpe?g|\.png|\.svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 6000,
                name: 'static/[name]-[hash:8].[ext]'
              }
            }
          ]
        }
      ]
    },
    devtool: isProd ? false : 'cheap-module-source-map',
    plugins: [
      new webpack.NamedModulesPlugin(),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name]-[hash:8].css',
        allChunks: true
      }),
      new ProgressBarPlugin({
        clear: false
      }),
      new HtmlWebpackPlugin({
        cache: true,
        template: './src/static/index.html',
        favicon: './src/static/favicon.png',
        filename: './index.html',
        now: new Date().toISOString(),
        package: `${pkg.name} v${pkg.version}`
      }),
      isProd ? false : new webpack.HotModuleReplacementPlugin()
    ].filter(Boolean),
    performance: {
      hints: false
    },
    stats: 'minimal'
  };
};
