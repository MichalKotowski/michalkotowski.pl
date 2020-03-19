import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layout/Layout"
import SEO from "../components/SEO"
import style from "../styles/components/single.module.scss"

export default ({ data }) => {
    return (
        <Layout>
            <SEO title='Thoughts' />
            <h3>
                Whenever I have enough time, I love to<br></br>
                share my thoughts about almost everything
            </h3>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id} class={style.single}>
                    <Link to={node.fields.slug}>
                        <span>{node.frontmatter.date}</span>
                        <h4>{node.frontmatter.title}</h4>
                    </Link>
                </div>
            ))}
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`