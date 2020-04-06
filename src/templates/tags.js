import React, { Component } from "react"
import { Link, graphql, navigate } from "gatsby"
import SEO from "../components/SEO"
import style from "../styles/components/thoughts.module.scss"

export default class Tags extends Component {
    render() {
        const { data, pageContext } = this.props

        function tagRedirect(category, event) {
            let slug = category.replace(/\s/g, '-').toLowerCase()
            if (event.keyCode === 13) {
                navigate(`/tag/${slug}`)
            } else {
                event.preventDefault()
                navigate(`/tag/${slug}`)
            }
        }

        return (
            <>
                <SEO title='Thoughts' />
                <h4 className={style.category}>
                    Current category
                    <span>{pageContext.tag}</span>
                </h4>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} className={style.singleThought}>
                        <Link to={node.fields.slug}>
                            <div className={style.head}>
                                <p>{node.frontmatter.title}</p>
                                <span>{node.frontmatter.date}</span>
                            </div>
                            <div className={style.body}>
                                {node.frontmatter.tags.map(( category, index ) => (
                                    <button onClick={(event) => tagRedirect(category, event)} onKeyDown={(event) => tagRedirect(category, event)} key={index} className={style.tag}>{category}</button>
                                ))}
                            </div>
                        </Link>
                    </div>
                ))}
                <Link to="/thoughts/" className={style.back}>Back to thoughts</Link>
            </>
        )
    }
}

export const query = graphql`
    query($tag: String!) {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: {frontmatter: {tags: {in: [$tag]}}}) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        tags
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`