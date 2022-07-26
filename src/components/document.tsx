import * as React from "react"
import { StaticQuery, graphql } from 'gatsby'

// markup
const Document = ({ keyName }) => {
  return <StaticQuery
    query={graphql`
  query {
    allContentfulSettings {
      edges {
        node {
          value {
            raw
          }
          key
        }
      }
    }
  }
  `}
    render={(data) => {
      const key = data.allContentfulSettings.edges.find(
        key => key.node.key === keyName
      )
      return (<div>
        {keyName}
        {key}
      </div>)
    }}
  />
}

export default Document
