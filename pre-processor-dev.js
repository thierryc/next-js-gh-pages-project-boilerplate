const sass = require('node-sass')

module.exports = (data, filename) => {
  return sass.renderSync({
    data,
    file: filename,
    outputStyle: 'nested'
  }).css.toString('utf8')
}
