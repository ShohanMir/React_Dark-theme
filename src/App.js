// eslint-disable-next-line import/no-unresolved
import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import ThemeContext from './contexts/ThemeContext';
import LandingPage from './pages/LandingPage';
import GlobalStyle from './styles/GlobalStyles';

function App() {
    const { theme } = useContext(ThemeContext);
    return (
        <ThemeProvider theme={{ theme }}>
            <GlobalStyle />
            <LandingPage />
        </ThemeProvider>
    );
}

export default App;
