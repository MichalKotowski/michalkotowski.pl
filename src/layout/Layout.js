import React from "react"
import Header from "./Header"
import Container from "../components/Container"
import "../styles/base/global.scss"

export default ({ children }) => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    {children}
                </Container>
            </main>
        </>
    )
}