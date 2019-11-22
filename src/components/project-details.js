import React from 'react'
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Space from "../components/space"
import Flex from '../components/flex'
import { Line } from '../components/line'
import theme from '../theme'

const Button = styled.a`
    padding:  ${theme.space[3]}px ${theme.space[4]}px;
    border: 2px solid black;
    border-radius: ${theme.radii[5]};
    transition: 0.2s ease-in;

    :hover {
        background-color: ${theme.colors.black};
        color: white;
        transition: 0.2s ease-in;
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


export default function projectDetails({ pageContext: { project } }) {
    return (
        <Layout>
            <SEO title={project.name} />
            <Space mt={[5]} />
            <div className="container">
                <div className="title">{project.name}</div>
                <Line my={[4]} />
                <Flex justify="space-between">
                    <div>{project.gitTags.map((tag, key) =>
                        <img key={key} src={tag} style={{ "marginRight": theme.space[3] }} />)}
                    </div>
                    <Button href={project.demo}>Live Project</Button>
                </Flex>

                <p>{project.type}</p>
                <p className="description">{project.date}</p>
                <Space my={[4]} />
                <Flex>
                    <div style={{ "marginRight": theme.space[6] }}>
                        <strong>Description</strong>
                        <p>{project.description}</p>
                    </div>
                    <div style={{ "marginRight": theme.space[6] }}>
                        <strong>Tech Stack</strong>
                        <ImagesWrapper>
                            {project.techStack.map((img, index) => (
                                <img key={index} src={require("../images/tech/" + img + ".png")} width="27px" height="27px" />
                            ))}
                        </ImagesWrapper>
                    </div>
                    <div>
                        <strong>Source Code</strong>
                        <div>
                            <a href={project.git}>{project.git}</a>
                        </div>

                    </div>
                </Flex>
            </div>


        </Layout>
    )
}
