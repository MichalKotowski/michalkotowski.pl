import React from "react"
import Header from "./Header"
import "../styles/base/global.scss"
import Transition from "../components/Transition"


export default ({ children, location }) => {
    return (
        <>
            <Header />
            <main>
                <Transition location = {location}>
                    {children}
                </Transition>
            </main>
        </>
    )
}