import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Flex from "../components/flex"
import theme from "../theme"

import Space from '../components/space'
import Project from "../components/project"

const experience = [
  {
    img: require("../images/cuwa.png"),
    title: "Co-Founder and Developer",
    company: "Cuwa",
    period: "July 2019 - Present"
  },
  {
    img: require("../images/tgt.png"),
    title: "Designer and Founder",
    company: "The Graphic Tribe",
    period: "May 2017 - August 2019, Romania"
  },
  {
    img: require("../images/kcl.png"),
    title: "Marketing Design Intern",
    company: "King’s Sport, KCL",
    period: "June 2018 - November 2018, London, UK"
  },
  {
    img: require("../images/join.png"),
    title: "Full Stack Developer (Part-time)",
    company: "Join",
    period: "June 2018 - May 2019, London, UK"
  },

]


const studies = [
  {
    img: require("../images/kcl.png"),
    name: "King's College London",
    degree: "Bachelor’s degree, Computer Science",
    period: "2017 - 2020"
  },
  {
    img: require("../images/cnsb.png"),
    name: "“Simion Barnutiu” National College",
    degree: "Mathematics and Informatics",
    period: "2013 - 2017"
  },

]



const Projects = () => {
  const data = useStaticQuery(graphql`
    query NonPageQuery {
      allProject {
        nodes {
            name,
            type,
            date,
            description,
            techStack,
            projectId,
            demo
        }
      }
    }
  `)
  console.log(data)
  return (
    data.allProject.nodes.slice(0, 3).map((project, index) =>
      <Project
        fixedHeight
        key={index}
        name={project.name}
        type={project.type}
        date={project.date}
        description={project.description}
        techStack={project.techStack}
        projectId={project.projectId}
        demo={project.demo}
      />)
  )
}


const Item = (props) => (
  <Flex mb={[4]}>
    <img style={{ "marginRight": theme.space[4] }} src={props.img} width="45px" height="45px" />
    <div>
      <h2>{props.title}</h2>
      <p>{props.name}</p>
      <p className="description">{props.period}</p>
    </div>
  </Flex>
)


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <div id="about" className="container">
      <p className="description">ABOUT ME</p>
      <h1>Education and Experience</h1>
      <Flex wrap="wrap">
        <div>
          <Flex mr={[0, 8, 8]} />
          <h2 style={{ marginBottom: theme.space[5] }}>Work Experience</h2>
          {experience.map((job, index) =>
            <Item key={index} img={job.img} title={job.title} name={job.company} period={job.period} />
          )}
        </div>
        <div>
          <h2 style={{ marginBottom: theme.space[5] }}>Studies</h2>
          {studies.map((stud, index) =>
            <Item key={index} img={stud.img} title={stud.name} name={stud.degree} period={stud.period} />
          )}
        </div>
      </Flex>
      <Space mb={[6]} />

    </div>

    <div style={{ "backgroundColor": theme.colors.gray200 }}>
      <Space pt={[6]} />
      <div className="container">

        <p className="description">PROJECTS</p>
        <h1>Personal and Professional Projects</h1>
        <p>Latest Projects</p>
        <Flex justify="space-between" wrap="wrap" py={[4]}>
          <Projects />
        </Flex>
        <Link to="/projects">View All</Link>

      </div>
    </div>
    <br />

    <div className="container">
    </div>
  </Layout >
)

export default IndexPage
