import React from 'react';
import reactDom from 'react-dom/client';
import App from './App';
import worker from './mocks/workers';

worker.start({ onUnhandledRequest: 'bypass' });
const root = reactDom.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
