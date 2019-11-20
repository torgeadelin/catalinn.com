import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Space from "../components/space"
import Project from "../components/project"
import theme from "../theme"
import Flex from "../components/flex"
import Masonry from "react-masonry-css"


const Projects = () => {
    const data = useStaticQuery(graphql`
      query ProjectsQuery {
        allProject {
          nodes {
              name,
              type,
              date,
              description,
              techStack,
          }
        }
      }
    `)
    console.log(data)
    return (
        data.allProject.nodes.map((project, index) =>
            <Project
                fixedHeight={true}
                key={index}
                name={project.name}
                type={project.type}
                date={project.date}
                description={project.description}
                techStack={project.techStack}
                selected={index}
            />)
    )
}

const Wrapper = styled.div`
    background-color: ${theme.colors.gray200};
    padding: ${theme.space[6]}px 0px;
    margin-top: ${theme.space[5]}px;
`

const ProjectsPage = () => (
    <Layout>
        <SEO title="Porjects" />
        <Space mt={[5]} />
        <div className="container">
            <div className="title">All Projects</div>
        </div>
        <Wrapper>
            <div className="container">
                <Flex align="stretch" justify="space-between" wrap="wrap">
                    <Projects />
                </Flex>

            </div>
        </Wrapper>







    </Layout>
)

export default ProjectsPage
