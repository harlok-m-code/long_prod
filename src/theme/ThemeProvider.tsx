import React, {FC, ReactElement, ReactNode, useMemo, useState,PropsWithChildren } from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

// interface PropsWithChildren {
//     children?: ReactNode | undefined
// };

const ThemeProvider: FC<PropsWithChildren> = ({ children }) =>  {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
