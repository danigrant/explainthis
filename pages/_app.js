import React from 'react'
import App from 'next/app'
import Head from 'next/head';
import '../components/Firebase'
import '../components/Twitter'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <div className="wrapper">
      <Head>
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600,700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css" />
      </Head>
      <Component {...pageProps} />
      <style jsx>{`
          .wrapper {
            font-family: -apple-system, 'IBM Plex Sans', sans-serif;
          }
      `}</style>
      </div>
    )
  }
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default MyApp
