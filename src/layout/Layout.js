import React, { Component } from "react"
import Header from "./Header"
import "../styles/base/global.scss"
import Transition from "../components/Transition"

export default class Layout extends Component {
    state = {
        isLoading: true,
        isLoaded: false,
    }

    componentDidMount() {
        this.setState({isLoading: false})
    }

    componentDidUpdate() {
        setTimeout(() => {
            if ( this.state.isLoading === false && this.state.isLoaded === false ) {
                this.setState({isLoaded: true})
            }
        }, 1)
    }

    render() {
        const { children, location } = this.props
        const { isLoading } = this.state

        return (
            <>
                <Header isThought={this.props.pageContext.isThought} isLoading={isLoading}/>
                <main>
                    <Transition location={location} isLoading={isLoading}>
                        {children}
                    </Transition>
                </main>
            </>
        )
    }
}
