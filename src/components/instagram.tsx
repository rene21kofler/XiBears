import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Instagram = () => {
  return (
    <StaticQuery
      query={graphql`
        query instagramQuery {
          allInstagramContent(limit: 5) {
            edges {
              node {
                caption
                media_url
                localFile {
                  id
                }
                album {
                  localFile {
                    id
                  } 
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="flex ">
          {data.allInstagramContent.edges.map((post) => (
            <div className="rounded ">
              {/* <h2>{post.node.caption}</h2> */}
              <img className="w-40 h-40" src={post.node.media_url} />
            </div>
          ))}
        </div>
      )}
    />
  )
}
export default Instagram