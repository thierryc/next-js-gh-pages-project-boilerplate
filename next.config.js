const fs = require('fs')

// next.config.js
module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
    }
  },
  webpack: (config, { dev }) => {
    /*
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'emit-file-loader',
            options: {
              name: 'dist/[path][name].[ext]'
            }
          },
          {
            loader: 'skeleton-loader',
            options: {
              procedure: function (content) {
                const fileName = `${this._module.userRequest}.json`
                const classNames = fs.readFileSync(fileName, 'utf8')

                trash(fileName)

                return ['module.exports = {',
                  `classNames: ${classNames},`,
                  `stylesheet: \`${content}\``,
                  '}'
                ].join('')
              }
            }
          },
          'postcss-loader'
        ]
      }
    )
    */
    return config
  }
}
