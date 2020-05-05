import React, { Component } from "react"
import { Link } from "gatsby"
import style from "../styles/layout/header.module.scss"
import { globalHistory } from '@reach/router'

export default class Header extends Component {
    state = {
        isScrolled: false,
        isMobile: false,
        isLoaded: false,
        isDarkMode: false,
        isHomepage: false,
    }

    componentDidMount() {
        this.handleMobile()
        this.handleHomepage()
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.handleMobile)
        window.addEventListener('click', this.handleHomepage)
        const isColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)')
        if (window.localStorage.getItem('theme') === 'dark' || isColorSchemeDark.matches === true) {
            document.body.classList.add('dark')
            document.getElementById("toggle").checked = true
            this.setState({ isDarkMode: true })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleMobile)
        window.removeEventListener('resize', this.handleHomepage)
    }

    componentDidUpdate() {
        setTimeout(() => {
            if ( this.props.isLoading === false && this.state.isLoaded === false ) {
                this.setState({isLoaded: true})
            }
        }, 1)
    }

    handleHomepage = () => {
        const url = globalHistory.location.pathname
        if (url === '/') {
            this.setState({ isHomepage: true })
        } else {
            this.setState({ isHomepage: false })
        }
    }

    handleScroll = () => {
        if (window.scrollY > 20) {
            this.setState({ isScrolled: true })
        } else {
            this.setState({ isScrolled: false })
        }
    }

    handleMobile = () => {
        if (window.innerWidth < 400) {
            this.setState({ isMobile: true })
        } else {
            this.setState({ isMobile: false })
        }
    }
    
    render() {
        const { isScrolled, isMobile, isLoaded, isDarkMode, isHomepage } = this.state
        const { isThought } = this.props

        const toggleDarkMode = () => {
            if (isDarkMode === false) {
                document.body.classList.add('dark')
                this.setState({ isDarkMode: true })
                window.localStorage.setItem('theme', 'dark')
            } else {
                document.body.classList.remove('dark')
                this.setState({ isDarkMode: false })
                window.localStorage.setItem('theme', 'light')
            }
        }

        return (
            <header 
                className={style.header}
                style={{
                    padding: isScrolled ? `10px 0` : `20px 0`,
                    transform: isLoaded ? `translateY(0)` : `translateY(-71px)`
                }}
            >
                <div className={style.container}>
                    <Link
                        to="/"
                        className={style.brand}
                        style={{
                            fontWeight: isMobile ? 700 : 400,
                            color: isHomepage && 'var(--grey08)'
                        }}
                    >
                        {isMobile ? `MK` : `Michał Kotowski`}
                    </Link>
                    <div className={style.actions}>
                        <ul className={style.navigation}>
                            <li className={style.navigationItem}>
                                <Link to="/thoughts/" style={{ color: isThought && 'var(--grey08)' }} activeClassName={style.active}>Thoughts</Link>
                            </li>
                            <li className={style.navigationItem}>
                                <Link to="/about/" activeClassName={style.active}>About</Link>
                            </li>
                        </ul>
                        <input type="checkbox" className={style.checkbox} id="toggle" name="toggle" onClick={toggleDarkMode}></input>
                        <label htmlFor="toggle" className={style.toggle}></label>
                    </div>
                </div>
            </header>
        )
    }
}