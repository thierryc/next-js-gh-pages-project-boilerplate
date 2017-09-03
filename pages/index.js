import Head from 'next/head'
import React from 'react'

export default class extends React.Component {
  /*

  pathname - path section of URL
  query - query string section of URL parsed as an object
  asPath - String of the actual path (including the query) shows in the browser
  req - HTTP request object (server only)
  res - HTTP response object (server only)
  jsonPageRes - Fetch Response object (client only)
  err - Error object if any error is encountered during the rendering

  only use pathname, query and asPath fields of the context object passed to getInitialProps.

  */

  static async getInitialProps ({  }) {

  }

  render () {
    return (
      <div>
        <Head>
          <title>Htaccess Generator</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <h1>Welcome to Htaccess Generator!</h1>
      </div>
    )
  }
}
