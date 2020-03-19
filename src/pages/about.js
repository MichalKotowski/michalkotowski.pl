import React from "react"
import Layout from "../layout/Layout"
import me from "../images/michalkotowski.jpg"
import SEO from "../components/SEO"

export default () => (
    <Layout>
        <SEO title='About' />
        <h3>
            Soon to come
        </h3>
        <img src={me} alt="Michał Kotowski" />
    </Layout>
)