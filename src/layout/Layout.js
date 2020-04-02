import React from "react"
import Header from "./Header"
import Container from "../components/Container"
import "../styles/base/global.scss"
import Transition from "../components/Transition"


export default ({ children, location }) => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <Transition location = {location}>
                        {children}
                    </Transition>
                </Container>
            </main>
        </>
    )
}