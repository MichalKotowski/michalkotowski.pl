import React from "react"
import Header from "./Header"
import Container from "../components/Container"
import "../styles/base/global.scss"
import Helmet from "react-helmet"

export default ({ children }) => (
    <>
        <Helmet title="Michał Kotowski" titleTemplate="%s - Web developer based in Warsaw" />
        <Header />
        <main>
            <Container>
                {children}
            </Container>
        </main>
    </>
)