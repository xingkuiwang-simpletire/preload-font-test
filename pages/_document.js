import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link
            rel="preload"
            href="/static/fonts/CircularStd-Book.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/static/fonts/CircularStd-BookItalic.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <style>
            {`
            @font-face {
              fontDisplay: swap;
              font-family: 'Circular Std';
              font-style: normal;
              font-weight: normal;
              src: url('/static/fonts/CircularStd-Book.woff2') format('woff2');
            }
            @font-face {
              fontDisplay: swap;
              font-family: 'Circular Std';
              font-style: italic;
              font-weight: normal;
              src: url('/static/fonts/CircularStd-BookItalic.woff2') format('woff2');
            }
            @font-face {
              fontDisplay: swap;
              font-family: 'Circular Std';
              font-style: normal;
              font-weight: bold;
              src: url('/static/fonts/CircularStd-Bold.woff2') format('woff2');
            }
            @font-face {
              fontDisplay: swap;
              font-family: 'Circular Std';
              font-style: italic;
              font-weight: bold;
              src: url('/static/fonts/CircularStd-BoldItalic.woff2') format('woff2');
            }
            body {
              font-family: "Circular Std", "Helvetica Neue", Helvetica, Arial, sans-serif;
              font-style: normal;
              font-weight: normal;
            }
          `}
          </style>
        </Head>
        <body>
          <NextScript />
          <Main />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
