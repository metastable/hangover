import React, { Component } from 'react';
// @ts-ignore
import favicon from './assets/img/favicon.ico';
interface HTMLProps {
  headComponents: Component;
  postBodyComponents: Component;
  body: any;
}
const HTML: React.FunctionComponent<HTMLProps> = ({ headComponents, postBodyComponents, body }) => (
  <html lang="en" className="has-navbar-fixed-top">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      {headComponents}
      <link rel="shortcut icon" href={favicon} />
    </head>
    <body>
      <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
      {postBodyComponents}
    </body>
  </html>
);

export default HTML;
