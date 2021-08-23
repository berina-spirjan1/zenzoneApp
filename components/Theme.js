import * as React from 'react';
import {useColorScheme} from 'react-native-appearance';
import {stylesDarkMode, stylesLightMode} from "../assets/Style";

export const ThemeContext = React.createContext({
    isDark: false,
    colors: stylesLightMode,
    setScheme: () => {},
});

export const ThemeProvider = (props) => {
    // Getting the device color theme
    const colorScheme = useColorScheme(); // Can be dark | light | no-preference

    /*
    * To enable changing the app theme dynamicly in the app (run-time)
    * we're gonna use useState so we can override the default device theme
    */
    const [isLight, setIsLight] = React.useState(colorScheme === "light");

    // Listening to changes of device appearance while in run-time
    React.useEffect(() => {
        setIsLight(colorScheme === "light");
    }, [colorScheme]);

    const defaultTheme = {
        isLight,
        // Changing color schemes according to theme
        colors: isLight ? stylesDarkMode : stylesLightMode,
        // Overrides the isLight value will cause re-render inside the context.
        setScheme: (scheme) => setIsLight(scheme === "light"),
    };

    return (
        <ThemeContext.Provider value={defaultTheme}>
            {props.children}
        </ThemeContext.Provider>
    );
};

// Custom hook to get the theme object returns {isLight, colors, setScheme}
export const useTheme = () => React.useContext(ThemeContext);
