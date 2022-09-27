import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        mobile: true; // adds the `mobile` breakpoint
        tablet: true;
        laptop: true;
        desktop: true;
    }
}
const defaultTheme = createTheme();

// Create a theme instance.
let theme = createTheme({
    palette: {
        primary: {
            dark: '#015F43',
            main: '#00875F',
            light: '#00B37E',
        },
        secondary: {
            dark: '#81D8F7',
            main: '#FBA94C',
            light: '#09090A',
            contrastText: '#121214',
        },
        error: {
            main: "#F75A68",
        },
        background: {
            default: '#FBFBFD',
        },
    },
    typography: {
        subtitle1: {
            color: '',
        },
    },
    breakpoints: {
        values: {
            ...defaultTheme.breakpoints.values,
            mobile: 520,
            tablet: 640,
            laptop: 1024,
            desktop: 1200,
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
