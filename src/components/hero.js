import React from 'react'
import styled from 'styled-components'

import Header from "./header"
import memoji from '../images/memoji.png'

const Wrapper = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
`

const Flex = styled.div`
    display: flex;
    
`

export default function Hero() {
    return (
        <Wrapper>
            <Flex>
                <img src={memoji} width="100px" />
                <h1>Hello, <br /> I'm Catalin</h1>
            </Flex>
        </Wrapper>
    )
}
