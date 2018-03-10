import Head from 'next/head'
import React from 'react'
import { Container, Row, Cell } from '../components/layout-grids'
import mainCss from '../styles/main.scss'

import info from '../package.json'

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

  static async getInitialProps ({ pathname, query, asPath }) {
    return { pathname, query, asPath }
  }

  render () {

    return (
      <div>
        <Head>
          <title>Next Js gh-pages Project Boilerplate</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" type="text/css" href="/static/css/components/layout-grids/grids.css" />
        </Head>

        <Container className="links">
          <Row>
            <Cell tablet={8} desktop={12} align={'middle'}>
              <h1>Welcome to Next.js gh-pages Project Boilerplate!</h1>
            </Cell>
          </Row>
          <Row>
            <Cell tablet={4} desktop={6} align={'middle'}>
              <div>
                
              </div>
            </Cell>
            <Cell tablet={4} desktop={6} align={'middle'}>
              <div>
                content
              </div>
            </Cell>
          </Row>
          <Row>
            <Cell phone={4} tablet={3} desktop={4} align={'middle'}>
              <div>
                content
              </div>
            </Cell>
            <Cell phone={4} tablet={3} desktop={4} align={'middle'}>
              <div>
                content
              </div>
            </Cell>
            <Cell phone={4} tablet={2} desktop={4} align={'middle'}>
              <div>
                content
              </div>
            </Cell>
          </Row>
        </Container>
      </div>
    )
  }
}
