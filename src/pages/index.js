import React from "react"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hello</h1>
    <h2>I'm kelmag, a front-end developer, living in Casablanca</h2>
    <p>
      Need a developer ? <Link to="/contact">Contact Me</Link>
    </p>
  </Layout>
)

export default IndexPage
