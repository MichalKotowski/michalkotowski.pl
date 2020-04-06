import React from "react"
import { Link, graphql, navigate } from "gatsby"
import SEO from "../components/SEO"
import style from "../styles/components/thoughts.module.scss"

const Tags = ({ pageContext, data }) => {
    function tagRedirect(category, event) {
        event.preventDefault()
        category = category.toLowerCase()
        navigate(`/tag/${category}`)
    }

    function onKeyDownTagRedirect(category, event) {
        if (event.keyCode === 13) {
            category = category.toLowerCase()
            navigate(`/tag/${category}`)
        }
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
                                <button onClick={(event) => tagRedirect(category, event)} onKeyDown={(event) => onKeyDownTagRedirect(category, event)} key={index} className={style.tag}>{category}</button>
                            ))}
                        </div>
                    </Link>
                </div>
            ))}
            <Link to="/thoughts/" className={style.back}>Back to thoughts</Link>
        </>
    )
}

export default Tags

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