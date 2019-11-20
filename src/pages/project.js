import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({ location }) => {

    const { state = {} } = location
    const { selected } = state

    return (
        < Layout >

            <SEO title="Page two" />
            <h1>{selected}</h1>
            <p>Welcome to page 2</p>
            <Link to="/">Go back to the homepage</Link>
        </Layout >
    )
}

export default SecondPage
