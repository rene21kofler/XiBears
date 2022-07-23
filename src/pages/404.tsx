import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Flag im Spiel - diese Seite gibt es nicht">
      <StaticImage
        alt="XiBears"
        src="../images/Kooperation.png"
      />
      
      <Link to="/">5 Yard penalty, repeat first down</Link>
    </Layout>
  )
}

export default NotFoundPage