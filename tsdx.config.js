const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        // inject SCSS as <style> into <head>
        // including bootstrap styles
        // to skip shipping & references of .scss files  
        inject: true,
        // to reuse bs4 and other package css styles
        modules: false,
      }),
    )
    return config
  },
}
