import React, { Component } from "react"
import { Link } from "gatsby"
import style from "../styles/layout/header.module.scss"

export default class Header extends Component {
    state = {
        isScrolled: false,
        isMobile: false,
    }

    componentDidMount() {
        this.handleMobile()
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.handleMobile)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleMobile)
    }

    handleScroll = () => {
        if (window.scrollY > 20) {
            this.setState({ isScrolled: true })
        } else {
            this.setState({ isScrolled: false })
        }
    }

    handleMobile = () => {
        if (window.innerWidth < 380) {
            this.setState({ isMobile: true })
        } else {
            this.setState({ isMobile: false })
        }
    }
    
    render() {
        const { isScrolled, isMobile } = this.state

        const ListLink = props => (
            <li className={style.navigationItem}>
                <Link to={props.to} activeClassName={style.active}>{props.children}</Link>
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
                    <Link
                        to="/"
                        className={style.brand}
                        style={{fontWeight: isMobile ? 700 : 400}}
                    >
                        {isMobile ? `MK` : `Michał Kotowski`}
                    </Link>
                    <ul className={style.navigation}>
                        <ListLink to="/thoughts/">thoughts</ListLink>
                        <ListLink to="/about/">about</ListLink>
                    </ul>
                </div>
            </header>
        )
    }
}