import React from 'react'
import Responsive from 'react-responsive'

// https://github.com/contra/react-responsive#common-use-cases

export const Desktop = props => {
    return (<Responsive {...props} minWidth={992} />)
}
export const Tablet = props => {
    return (<Responsive {...props} minWidth={768} maxWidth={991} />)
}
export const Mobile = props => {
    return (<Responsive {...props} maxWidth={767} />)
}

// Not mobile (desktop or laptop or tablet)
export const DefaultResponsive = props => {
    return (<Responsive {...props} minWidth={768} />)
}