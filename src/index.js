import React from 'react';
import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
import './index.css';

// import App from './App';
import './statics/iconfont/iconfont.css';
import RouterWrapper from './Router'
ReactDOM.render(
  // <React.StrictMode>
    <RouterWrapper />
      ,
  // </React.StrictMode>
  document.getElementById('root')
);
