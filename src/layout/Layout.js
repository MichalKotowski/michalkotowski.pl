import React from "react"
import Header from "./Header"
import Container from "../components/Container"
import "../styles/base/global.scss"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        titleTemplate
                    }
                }
            }
        `
    )
    return (
        <>
            <Helmet title={data.site.siteMetadata.title} titleTemplate={data.site.siteMetadata.titleTemplate} />
            <Header />
            <main>
                <Container>
                    {children}
                </Container>
            </main>
        </>
    )
}