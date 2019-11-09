import Head from 'next/head';
import '../components/Firebase'

function MyApp({ Component, pageProps }) {
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
