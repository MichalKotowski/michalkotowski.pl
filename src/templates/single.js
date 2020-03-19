import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/Layout"
import SEO from "../components/SEO"

export default ({ data }) => {
    const single = data.markdownRemark
    return (
        <Layout>
            <SEO title={single.frontmatter.title} description={single.excerpt} />
            <h3>{single.frontmatter.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: single.html }} />
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
            excerpt
        }
    }
`