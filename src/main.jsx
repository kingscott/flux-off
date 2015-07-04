import React from 'react';
// import components,  { config } from './src/Components/index';
import App from './src/app';

let run = () => {
  React.render(<App />, document.getElementById('test'));
};

let onReady = new Promise((resolve) => {
  window.addEventListener('DOMContentLoaded', resolve);
});

Promise.all([
  onReady
]).then(run);
