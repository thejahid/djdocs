import React, { Component} from "react"
import { StaticQuery, graphql } from "gatsby"
import Navitem from "./navitem"

class Navme extends Component {
    render() {

        const { data } = this.props;
        const { edges: docs } = data.allMarkdownRemark;

        return(
            <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading">Developer Jahid</div>
                <div className="list-group list-group-flush">
                    {
                        docs.map(({ node: doc }) => (
                                <Navitem url={doc.frontmatter.path} id={doc.id} name={doc.frontmatter.title}   />
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}

export default () => (
    <StaticQuery
      query={graphql`
          query MyQuery {
              allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
              edges {
                  node {
                  frontmatter {
                      title
                      path
                      date(formatString: "MMMM DD, YYYY")
                  }
                  id
                }
              }
            }
          }        
      `}
      render={(data, count) => <Navme data={data} count={count} />}
    />
  )