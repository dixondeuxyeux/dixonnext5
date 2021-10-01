import { ServerStyleSheets } from '@material-ui/core/styles'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='description'
            content='The Print Store of DixonDeuxYeux Photographie, New York, Dakar, Addis Ababa, Paris'
          ></meta>
          <meta
            name='keywords'
            content='DixonDeuxYeux, Photographie, Africa, African-American, New York,
Brooklyn Kings, bikers, NFL, UNICEF, United Way, Ford Foundation,
Ethiopia, Senegal, Sénégal, Dakar'
          ></meta>
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          <link
            rel='shortcut icon'
            type='image/png'
            href='/favicon4a.png'
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage
  ctx.renderPage = () => {
    return originalRenderPage({
      // eslint-disable-next-line react/display-name
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    })
  }
  const initialProps = await Document.getInitialProps(ctx)
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  }
}
