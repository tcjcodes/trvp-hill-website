import Typography from "typography"
import moragaTheme from "typography-theme-moraga"

import '../utils/font-awesome-4.7.0/css/font-awesome.min.css';
import { lightColor, darkColor, lightSecondaryColor } from './colors';

moragaTheme.baseFontSize = '20px';
moragaTheme.bodyColor = darkColor;
moragaTheme.headerColor = lightColor;
moragaTheme.googleFonts.push({
    name: 'Lato',
    styles: ['200', '400'],
});
moragaTheme.googleFonts.push({
    name: 'Oswald',
    styles: ['500', '600'],
});
moragaTheme.headerFontFamily.splice(0, 0, 'Lato');
moragaTheme.overrideThemeStyles = (data, options, styles) => {
    return {
        body: {
            backgroundColor: darkColor,
            color: lightColor,
            overflowX: 'hidden'
        },
        'a': {
            textTransform: 'uppercase',
            color: 'rgb(158, 158, 158)',
            opacity: 0.5,
            transition: 'opacity 0.1s ease-in',
        },
        'a:hover': {
            color: lightSecondaryColor, //'rgb(230, 230, 230)',
            textDecoration: 'none',
            boxShadow: 'none',
            opacity: 1,
            transition: 'opacity 0.1s ease-in',
        },
        'small a': {
            fontSize: data.rhythm(1 / 2)
        },
        'h1,h2,h3,h4,h5,h6': {
            textTransform: 'uppercase',
            fontWeight: 400
        },
    };
}

const typography = new Typography(moragaTheme)

export default typography