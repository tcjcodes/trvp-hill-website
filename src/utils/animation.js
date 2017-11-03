export const zoomOnHover = {
    transitionDuration: '0.2s',
    transitionProperty: 'transform',
    transform: 'perspective(1px) translateZ(0)',
    '&:hover': {
        transform: 'scale(1.1)'
    }
}