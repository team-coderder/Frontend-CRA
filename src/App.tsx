import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import Routes from './routes';
import { Dialog } from './components';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <Routes />
                <Dialog />
            </Router>
        </ThemeProvider>
    );
};

export default App;
