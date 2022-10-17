import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { MetaMaskProvider } from 'metamask-react';
import '../styles/globals.css';
import Layout from '../components/layout/layout';
import UserContext from '../components/user/UserContext';
import Meta from '../components/html/head/Meta';
import { store } from '../store/store';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const path = router.asPath;
  const scrollRef = useRef({
    scrollPos: 0,
  });

  return (
    <>
      <Meta />

      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <MetaMaskProvider>
            <UserContext.Provider value={{ scrollRef: scrollRef }}>
              {path === '/login' ? (
                <Component {...pageProps} />
              ) : (
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              )}
            </UserContext.Provider>
          </MetaMaskProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
