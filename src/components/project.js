import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import theme from '../theme'
import Space from './space'
import { Link } from 'gatsby'


const Wrapper = styled.div`
    padding: ${theme.space[5]}px;
    background-color: white;
    border-radius: ${theme.radii[4]} ${theme.radii[4]} 0px 0px;
   
    min-height: ${p => p.fixedHeight ? "420px" : "initial"};

   h1 {
       margin-bottom: ${theme.space[1]}px;
   }
`

const ImagesWrapper = styled.div`
    padding-top: ${theme.space[2]}px;
    display: flex;
    img {
        margin-right: ${theme.space[3]}px;
        margin-bottom: 0px;
    }

    img:last-child {
        margin-right: 0px;
    }
`

const Divider = styled.div`
    height: 20px;
    width: 1px;
    background-color: black;
`

const Buttons = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: ${theme.space[4]}px;
    background-color: ${theme.colors.gray500};
    border-radius: 0px 0px ${theme.radii[4]} ${theme.radii[4]};
`

const OuterWrapper = styled.div`
    width: 375px;
    margin-bottom: ${theme.space[5]}px;

`

function Project(props) {
    return (
        <OuterWrapper>
            <Wrapper {...props}>
                <h1>{props.name}</h1>
                <p>{props.type}</p>
                <p className="description">{props.date}</p>
                <Space mt={[3]} />
                <strong>Description</strong>
                <p>{props.description}</p>
                <Space mt={[3]} />
                <strong>Tech Stack</strong>
                <ImagesWrapper>
                    {props.techStack.map((img, index) => (
                        <img key={index} src={require("../images/tech/" + img + ".png")} width="27px" height="27px" />
                    ))}
                </ImagesWrapper>

            </Wrapper>
            <Buttons>
                <Link to={"/project/" + props.projectId}>Details</Link>
                <Divider />
                <Link to={props.demo}>Final Product</Link>

            </Buttons>
        </OuterWrapper >

    )
}

export default Project