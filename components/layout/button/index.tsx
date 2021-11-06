import React, { FC } from 'react'
import { Container } from './index.styles'
import Props from './types'

const Button: FC<Props> = ({ children }) => {
    return (
        <Container>
            { children && children }
        </Container>
    )
}

export default Button
