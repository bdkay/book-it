// Import React application, execute in node
// Import = babel // Require = node

const React = require('react');

import App from '../client/components/App';

// Take App, convert it to a string. Use the string inside the node request responder to send it as html
const ReactDOMServer = require('react-dom/server');

export default () => {
  return ReactDOMServer.renderToString(<App />);
}
