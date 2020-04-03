import React from "react"
import { Link, graphql, navigate } from "gatsby"
import SEO from "../components/SEO"
import style from "../styles/components/thoughts.module.scss"

export default ({ data }) => {
    function tagRedirect(category, event) {
        event.preventDefault()
        category = category.toLowerCase()
        navigate(`/tag/${category}`)
    }

    return (
        <>
            <SEO title='Thoughts' />
            <h4>
                Whenever I have enough time, I love to <br></br>
                share my thoughts about almost everything
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
                                <span role="button" tabIndex="-1" onClick={(event) => tagRedirect(category, event)} key={index} className={style.tag}>{category}</span>
                            ))}
                        </div>
                    </Link>
                </div>
            ))}
        </>
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