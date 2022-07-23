import * as React from "react"
import Layout from '../components/layout'
import Instagram from "../components/instagram"
import SocialBanner from "../components/socialBanner"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="XiBears">
      <p>
        Hey guys
      </p>
      <SocialBanner />
      <Instagram />
    </Layout>
  )
}

export default IndexPage
