import React from "react"
import Layout from "../layout/Layout"
import me from "../images/michalkotowski.jpg"
import SEO from "../components/SEO"
import style from "../styles/components/about.module.scss"

export default () => (
    <Layout>
        <SEO title='About' />
        <h4 className={style.heading}>
            Hello, World!
        </h4>
        <p>
            I'm <strong>Michał Kotowski</strong>, an artist, designer, and developer. Currently I live in Warsaw, working remotely for a creative agency based in UK, London.
            I love being among nature, riding a bike and broadening my competences across all the topics.
        </p>
        <p>
            I would like to thank the creators of lofi hip hop without whom I would not be able to concentrate and achieve all the things I have achieved.
        </p>
        <p>
            I believe that the world can become much more beautiful place by spreading love and respect.
            I hope that one day I will love myself enough to be able to effectively share my mindset with others.
        </p>
        <img className={style.image} src={me} alt="Michał Kotowski" />
    </Layout>
)