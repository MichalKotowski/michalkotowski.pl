import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import style from "../styles/components/about.module.scss"
import Img from "gatsby-image"

const About = (props) => (
    <>
        <SEO title='About' description="My name is Michał Kotowski. I'm an artist, designer and developer. Currently living in Warsaw, working remotely for a creative agency based in UK, London"/>
        <h4 className={style.heading}>
            Hello, World!
        </h4>
        <p>
            I'm <strong>Michał Kotowski</strong>, an artist, designer and developer. Currently I live in Warsaw, working remotely for a creative agency based in UK, London.
            I love being among nature, riding a bike and broadening my competences across all the topics.
        </p>
        <p>
            I would like to thank the creators of lofi hip hop without whom I would not be able to concentrate and achieve all the things I have achieved.
        </p>
        <Img className={style.image} fluid={props.data.me.childImageSharp.fluid} alt="Michał Kotowski" />
    </>
)

export default About

export const pageQuery = graphql`
    query {
        me: file(relativePath: { eq: "images/michalkotowski.jpg" }) {
            childImageSharp {
                fluid(quality: 100, maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;