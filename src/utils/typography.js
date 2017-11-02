import Typography from "typography"
import moragaTheme from "typography-theme-moraga"

moragaTheme.baseFontSize = '20px';
moragaTheme.bodyColor = 'hsl(0, 0%, 0%)';
moragaTheme.headerColor = 'hsl(0, 100%, 100%)';
moragaTheme.googleFonts.push({
  name: 'Lato',
  styles: ['200', '400', '400i', '700'],
});
moragaTheme.googleFonts.push({
  name: 'Oswald',
  styles: ['500', '600'],
});
moragaTheme.headerFontFamily.splice(0, 0, 'Lato');
moragaTheme.overrideThemeStyles = (data, options, styles) => {
  return {
    body: {
      backgroundColor: '#000',
      color: '#fff',
    },
    'a': {
      textTransform: 'uppercase',
      letterSpacing: data.rhythm(1 / 10),
      color: 'rgb(158, 158, 158)',
      fontFamily: 'Oswald',
      opacity: 0.5,
      // transition: 'opacity 0.1s ease-in',
      transition: 'color 0.1s ease-in',
    },
    'a:hover': {
      color: 'rgb(230, 230, 230)',
      textDecoration: 'none',
      boxShadow: 'none',
      opacity: 1,
      transition: 'opacity 0.15s ease-in',
    },
    'small a': {
      fontSize: data.rhythm(1 / 2)
    },
    'h1,h2,h3,h4,h5,h6': {
      textTransform: 'uppercase',
      // color: '#a0a0a0',
      fontWeight: 400
    },
  };
}

const typography = new Typography(moragaTheme)

export default typography