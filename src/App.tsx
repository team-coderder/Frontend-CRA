import React from 'react';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <Routes />
            </Router>
        </ThemeProvider>
    );
};

export default App;
