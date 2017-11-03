import { rhythm } from '../utils/typography';
import { secondaryFont } from '../utils/fonts'
import { lightColor, darkColor } from './colors';

export const button = {
    opacity: '0.9',
    borderRadius: '3px',
    padding: `${rhythm(1/4)} ${rhythm(1/2)}`,
    transitionDuration: '0.2s',
    transitionProperty: 'transform',
    transform: 'perspective(1px) translateZ(0)',

    ...secondaryFont,
    '&:hover': {
        cursor: 'pointer',
        transform: 'scale(1.1)'
    }
}

export const primaryButton = {
    ...button,
    border: `3px solid ${lightColor}`,
    background: lightColor,
    color: darkColor,
}

export const primaryButtonOutline = {
    ...button,
    border: `3px solid ${lightColor}`,
    background: darkColor,
    color: lightColor,
}