import React, { memo } from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import theme from '../theme'

import Flex from "./flex"
import Emoji from './emoji'

import memojiImg from '../images/memoji.png'

const Wrapper = styled.div`
    height: 85vh;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
`


const Line = styled.div`
    width: 320px;
    height: 2px;
    background-color: black;
    ${space};
`



export default function Hero() {
    return (
        <Wrapper>
            <Flex wrap="wrap" direction="row">
                <img style={{"marginRight": theme.space[5]}} src={memojiImg} alt="Catalin Torge Facemoji" width="100px" height="176px" />
                <Flex direction="column">
                    <p className="title">Hello, <br /> I'm Catalin</p>
                    <Line mb={[3]} />
                    <p>Currently Final Year Student <Emoji symbol="🎒" label="backpack" />@ King’s College London,<br /> Computer Science BSc <Emoji symbol="👨🏻‍💻" label="man technologist" /></p>
                </Flex>
            </Flex>
        </Wrapper>
    )
}
