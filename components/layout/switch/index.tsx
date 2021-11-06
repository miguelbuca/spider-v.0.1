import React, { FC, useState, useEffect } from 'react'
import { Container } from './index.styles'
import Props from './types'

const Switch: FC<Props> = ({ onChange, children }) => {

    const [state, setState] = useState<boolean>()
    
    useEffect(() => {
        if(onChange)onChange(state)
    } , [state])

    return (
        <Container onClick={()=>setState(prev=>!prev)}>
            { children && children }
        </Container>
    )
}

export default Switch