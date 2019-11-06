function MyApp({ Component, pageProps }) {
  return (
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
