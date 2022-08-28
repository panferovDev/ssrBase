import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import userSlice from '../redux/slices/userSlice';

export default function Layout({ initState }) {
  delete initState.settings;
  delete initState._locals;
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=yes" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.initState=${JSON.stringify(initState)}`,
          }}
        />
        <script defer src="/js/app.js" />
        <script defer src="/js/vendor.js" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />

        <title>React SSR</title>
      </head>
      <body>
        <div id="root">
          <StaticRouter location={initState.path}>
            <Provider store={configureStore({
              reducer: {
                user: userSlice,
              },
              preloadedState: {
                user: initState.user || null,
              },
            })}
            >
              <App />
            </Provider>
          </StaticRouter>
        </div>
      </body>
    </html>
  );
}
