import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './calculator/Calculator';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100vh;
  }
`
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global/>
    <Calculator />
  </React.StrictMode>
);

reportWebVitals();
