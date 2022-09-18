import { createGlobalStyle } from 'styled-components';

export const colors = {
    background: '#f5f7fb',
    primary: '#293264',
    secondary: '#fff',
    button: '#4d59be',
    correct: '#00e600',
    incorrect: '#ff3333'
};

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }
`;
