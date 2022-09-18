import React from 'react';
import ReactDOM from 'react-dom/client';

import QuizProvider from './providers/QuizProvider';
import { GlobalStyles } from './styles/Global';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QuizProvider>
            <GlobalStyles />
            <App />
        </QuizProvider>
    </React.StrictMode>
);
