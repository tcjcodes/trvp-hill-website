import Typography from "typography"
import moragaTheme from "typography-theme-moraga"

moragaTheme.googleFonts.splice(0, 0, {
    name: 'Lato',
    styles: ['200', '400', '400i', '700'],
})
moragaTheme.headerFontFamily.splice(0, 0, 'Lato');

const typography = new Typography(moragaTheme)

export default typography