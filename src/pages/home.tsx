import * as React from "react"
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'

// markup
const Home = () => {
  return (
    <Layout pageTitle="Home">
      <StaticQuery
        query={graphql`
        query blogQuery {
            allContentfulBlog {
            edges {
                node {
                content {
                    raw
                }
                id
                title
                }
            }
            }
        }
      `}
        render={data => (
          <div className="flex">
            {data.allContentfulBlog.edges.map((post) => (
              <div>
                <span>{post.node.title} </span>
              </div>
            ))}
          </div>
        )}
      />
    </Layout>
  )
}

export default Home
