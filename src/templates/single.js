import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layout/Layout"
import SEO from "../components/SEO"
import style from "../styles/components/single.module.scss"

export default ({ data }) => {
    const single = data.markdownRemark
    return (
        <Layout>
            <SEO title={single.frontmatter.title} description={single.excerpt} />
            <h3>{single.frontmatter.title}</h3>
            <p className={style.author}>By <Link to="/about/">Michał Kotowski</Link></p>
            <div className={style.content} dangerouslySetInnerHTML={{ __html: single.html }} />
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