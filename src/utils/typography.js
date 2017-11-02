import Typography from "typography"
import moragaTheme from "typography-theme-moraga"

moragaTheme.bodyColor = 'hsl(0, 0%, 0%)';
moragaTheme.headerColor = 'hsl(0, 100%, 100%)';
moragaTheme.googleFonts.splice(0, 0, {
  name: 'Lato',
  styles: ['200', '400', '400i', '700'],
})
moragaTheme.headerFontFamily.splice(0, 0, 'Lato');
moragaTheme.overrideThemeStyles = (data, options, styles) => {
  return {
    body: {
      backgroundColor: '#000',
      color: '#fff',
    },
    'a': {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: data.rhythm(1/8),
      color: 'rgb(158, 158, 158)'
    },
    'a:hover': {
      color: 'rgb(230, 230, 230)',
      textDecoration: 'none',
      // fontWeight: 'bold'?
    },
    'small a': {
      fontSize: data.rhythm(1/2)
    },
    'h1,h2,h3,h4,h5,h6': {
      color: 'gainsboro',
    },
  };
}

const typography = new Typography(moragaTheme)

export default typography