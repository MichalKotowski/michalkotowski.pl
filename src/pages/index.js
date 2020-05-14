import React, { Component } from "react"
import SEO from "../components/SEO"
import style from "../styles/pages/home.module.scss"
import styleThoughts from "../styles/components/thoughts.module.scss"
import { Link, graphql } from "gatsby"

export default class Index extends Component {
    render() {
        const { data } = this.props

        return (
            <>
                <SEO title='Home' description="My name is Michał Kotowski - I'm a web developer based in Warsaw with experience across design, digital, print and brand identity"/>
                <h4>
                    I’m a web developer based in Warsaw <br></br>
                    with experience across design, digital, print, and brand identity.
                </h4>
                <div className={style.columns}>
                    <a href="https://github.com/michalkotowski" className={style.card} target="_blank" rel="noopener noreferrer">
                        <h5>Website source</h5>
                        <p><span>github.com/</span>MichalKotowski</p>
                    </a>
                    <a href="mailto:hello@michalkotowski.pl" className={style.card} target="_blank" rel="noopener noreferrer">
                        <h5>Contact me at</h5>
                        <p>hello@michalkotowski.pl</p>
                    </a>
                </div>
                <div className={style.heading}>
                    <h5>
                        Latest thoughts
                    </h5>
                    <Link to='/thoughts/'>View all</Link>
                </div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} className={styleThoughts.singleThought}>
                        <Link to={node.fields.slug}>
                            <div className={styleThoughts.head}>
                                <p>{node.frontmatter.title}</p>
                                <span>{node.frontmatter.date}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </>
        )
    }
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 3 ) {
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