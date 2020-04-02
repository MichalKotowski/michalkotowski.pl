import React, { Component } from "react"
import { Link } from "gatsby"
import style from "../styles/layout/header.module.scss"

export default class Header extends Component {
    state = {
        isScrolled: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        if (window.scrollY > 20) {
            this.setState({ isScrolled: true })
        } else {
            this.setState({ isScrolled: false })
        }
    }
    
    render() {
        const { isScrolled } = this.state

        const ListLink = props => (
            <li className={style.navigationItem}>
                <Link to={props.to}>{props.children}</Link>
            </li>
        )

        return (
            <header 
                className={style.header}
                style={{
                    padding: isScrolled ? `10px 0` : `20px 0`
                }}
            >
                <div className={style.container}>
                    <Link to="/" className={style.brand}>Michał Kotowski</Link>
                    <ul className={style.navigation}>
                        <ListLink to="/thoughts/">thoughts</ListLink>
                        <ListLink to="/about/">about</ListLink>
                    </ul>
                </div>
            </header>
        )
    }
}