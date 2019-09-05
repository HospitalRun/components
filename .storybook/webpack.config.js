const { TsConfigPathsPlugin } = require('awesome-typescript-loader')
const webpack = require('webpack')

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  })
  config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx']
  config.resolve.plugins = [new TsConfigPathsPlugin({})]
  config.plugins.push(
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV === 'development',
    }),
  )

  return config
}
