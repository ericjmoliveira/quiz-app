import React from 'react';
import ReactDOM from 'react-dom/client';

import QuizProvider from './providers/QuizProvider';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QuizProvider>
            <App />
        </QuizProvider>
    </React.StrictMode>
);
