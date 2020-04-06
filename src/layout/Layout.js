import React, { Component } from "react"
import Header from "./Header"
import "../styles/base/global.scss"
import Transition from "../components/Transition"

export default class Layout extends Component {
    render() {
        const { children, location } = this.props
        return (
            <>
                <Header isThought={this.props.pageContext.isThought}/>
                <main>
                    <Transition location = {location}>
                        {children}
                    </Transition>
                </main>
            </>
        )
    }
}
