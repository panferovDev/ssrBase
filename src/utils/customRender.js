import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from '../components/Layout';

const customRender = (filePath, initState, cb) => {
//   const layout = React.createElement(Layout, { initState });
  const html = renderToString(<Layout initState={initState} />);
  return cb(null, html);
};

export default customRender;
