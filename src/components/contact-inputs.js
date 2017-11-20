import React from 'react'
import PropTypes from 'prop-types'
import { rhythm } from '../utils/typography';
import { darkSecondaryColor, lightColor, lightSecondaryColor } from '../utils/colors'
import { secondaryFont } from '../utils/fonts'
import { DefaultResponsive } from '../utils/responsive'

const labelCss = {
    ...secondaryFont,
    fontSize: rhythm(4 / 5),
}
const sharedInputCss = {
    letterSpacing: '1px',
    border: 0,
    borderBottom: `1px solid ${lightSecondaryColor}`,
    padding: `${rhythm(1 / 3)} 0`,
    color: lightColor,
    background: 'transparent',
    fontSize: rhythm(6 / 10),
    '&:focus': {
        outline: 'none',
        borderBottom: `2px solid ${lightColor}`,
    },
}

export const TextInput = (props) => (
    <DefaultResponsive>{(isDesktop) =>
        <div css={{
            marginBottom: `${rhythm(1)}`,
            width: isDesktop ? '28%' : '95%',
            display: 'inline-block',
            marginRight: isDesktop && rhythm(1)
        }}>
            <label css={labelCss} htmlFor={props.name}>{props.label}</label>
            <br/>
            <input
                css={{
                    ...sharedInputCss,
                    width: '100%',
                }}
                name={props.name}
                type={props.type || 'text'}
                value={props.value}
                required={props.required}
                onChange={props.onChange}/>
        </div>
    }</DefaultResponsive>
)

TextInput.propTypes = {
    required: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export const TextareaInput = (props) => (
    <div>
        <label css={labelCss} htmlFor={props.name}>{props.label}</label>
        <br/>
        <textarea
            css={{
                ...sharedInputCss,
                margin: `${rhythm(1 / 3)} 0 ${rhythm(1)} 0`,
                resize: 'none',
                height: rhythm(8),
                width: '95%',
            }}
            name={props.name}
            value={props.value}
            required={props.required}
            onChange={props.onChange}/>
    </div>
)

TextareaInput.propTypes = {
    required: PropTypes.bool,
    value: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}