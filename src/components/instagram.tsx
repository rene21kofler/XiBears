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
        <div>
          {data.allInstagramContent.edges.map((post, i) => ( 
          <div>
            <h2>{post.node.caption}</h2>
            <img src={post.node.media_url}/>
          </div>
          ))}
        </div>
      )}
    />
  )
}
export default Instagram