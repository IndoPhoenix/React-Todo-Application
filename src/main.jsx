// import React, { createElement } from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { StrictMode } from 'react';


const root = createRoot(document.querySelector(".todobody"));
root.render(
    <StrictMode>
        <App/>
    </StrictMode>

);

