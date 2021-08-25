import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/App.js'
import './style.css';

const container= document.getElementById('root');

ReactDom.render(<> <App/> </> , container);