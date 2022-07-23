import * as React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

// markup
const Players = () => {
  return (
    <Layout pageTitle="Players">
      <StaticQuery
        query={graphql`
          query playerQuery {
            allContentfulPlayer {
              edges {
                node {
                  name
                } 
              }
            }
        }
      `}
        render={data => (
          <div className="flex">
            {data.allContentfulPlayer.edges.map((post) => (
              <div>
                <span >{post.node.name}</span>
              </div>
            ))}
          </div>
        )}
      />
    </Layout>
  )
}

export default Players
