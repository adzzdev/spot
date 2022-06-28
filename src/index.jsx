import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import Application from "./application";
import { app } from "./integration/firebase/firebase";

/**
 * Kindly change the App imported based on the component or topics you want to test.
 */
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Application/>);