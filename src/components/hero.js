import React, { memo } from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import theme from '../theme'

import Flex from "./flex"
import Emoji from './emoji'
import { Line } from './line'
import memojiImg from '../images/memoji.png'

const Wrapper = styled.div`
    height: 85vh;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
`


export default function Hero() {
    return (
        <div className="container">
            <Wrapper>
                <Flex wrap="wrap" direction="row">
                    <img style={{ "marginRight": theme.space[5] }} src={memojiImg} alt="Catalin Torge Facemoji" width="100px" height="176px" />
                    <Flex direction="column">
                        <p className="title">Hello, <br /> I'm Catalin</p>
                        <Line mb={[3]} />
                        <p>Software Engineer <a href="https://twitter.com/cisco">@Cisco</a> <a href="https://twitter.com/webex">@Webex</a> <Emoji symbol="👨🏻‍💻" label="man technologist" /><br /> Computer Science BSc <a href="https://www.kcl.ac.uk/">@KCL</a> <Emoji symbol="🎒" label="backpack" /></p>
                    </Flex>
                </Flex>

            </Wrapper>
        </div>
    )
}
