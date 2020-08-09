import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import mystyles from '../public/mystyles.css';
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from './store/store'

let initialState = {
  isloading: 0,
  isSuccess: false,
}

export default function MyApp({ Component, pageProps }) {
  // const { Component, pageProps } = props;
  const store = useStore(pageProps.initialReduxState)
  // const store = useStore(initialState)
  const persistor = persistStore(store)

  // console.log(pageProps.userprofile);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<Component {...pageProps} />} persistor={persistor}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      {/* <ThemeProvider theme={theme}> */}
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* <CssBaseline /> */}
        <Component {...pageProps} />
      {/* </ThemeProvider> */}
      </PersistGate>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
