import * as React from "react"
import Layout from '../components/layout'
import Instagram from "../components/instagram"
import Documents from "../components/document"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="XiBears">
      <Documents keyName="Home"/>
      {/* <Instagram /> */}
    </Layout>
  )
}

export default IndexPage
