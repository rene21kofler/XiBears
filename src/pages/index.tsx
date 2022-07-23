import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <title>XiBears</title>
      <h1>XiBears</h1>
      <p>
        content
      </p>
      <StaticImage
        alt="XiBears"
        src="../images/logo.png"
      />
    </Layout>
  )
}

export default IndexPage
