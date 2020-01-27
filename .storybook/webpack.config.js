const webpack = require('webpack')
const path = require('path')

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          configFile: path.resolve(__dirname, '../stories/tsconfig.json'),
        }
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  })
  config.module.rules.push({
    test: /\.(stories|story)\.[tj]sx?$/,
    loader: require.resolve('@storybook/source-loader'),
    exclude: [/node_modules/],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ],
  })
  config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx']
  config.plugins.push(
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV === 'development',
    }),
  )

  return config
}
