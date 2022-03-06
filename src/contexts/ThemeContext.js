import { createContext, useReducer } from 'react';
import themeList from '../data/themeList';

const ThemeContext = createContext();
const lightTheme = themeList.light;
const darkTheme = themeList.dark;

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            localStorage.setItem('theme', state.theme === lightTheme ? darkTheme : lightTheme);
            return {
                theme: state.theme === darkTheme ? lightTheme : darkTheme,
            };
        default:
            return state;
    }
};

function ThemeContextProvider({ children }) {
    // eslint-disable-next-line consistent-return
    const getInitialTheme = () => {
        const theme = localStorage.getItem('theme');
        const prefersDark =
            window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (theme) {
            return theme;
        }
        if (!theme) {
            if (prefersDark) {
                return darkTheme;
            }
            return lightTheme;
        }
    };

    const initialState = {
        theme: getInitialTheme(),
    };

    const [state, dispatch] = useReducer(themeReducer, initialState);
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const value = {
        theme: state.theme,
        toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export default ThemeContext;
// eslint-disable-next-line prettier/prettier
export { ThemeContextProvider };
