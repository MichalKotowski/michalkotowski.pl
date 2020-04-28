import React, { Component } from "react"
import { Link } from "gatsby"
import style from "../styles/layout/header.module.scss"

export default class Header extends Component {
    state = {
        isScrolled: false,
        isMobile: false,
        isLoaded: false,
        isDarkMode: false,
    }

    componentDidMount() {
        this.handleMobile()
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.handleMobile)
        if (window.localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark')
            this.setState({ isDarkMode: true })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.handleMobile)
    }

    componentDidUpdate() {
        setTimeout(() => {
            if ( this.props.isLoading === false && this.state.isLoaded === false ) {
                this.setState({isLoaded: true})
            }
        }, 1)
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
        const { isScrolled, isMobile, isLoaded, isDarkMode } = this.state
        const { isThought } = this.props

        const isCurrentThought = props => {
            if (isThought === true && props.children === 'thoughts') {
                return true
            }
        }

        const ListLink = (props) => (
            <li className={style.navigationItem}>
                <Link to={props.to} activeClassName={style.active} className={isCurrentThought(props) && style.active}>{props.children}</Link>
            </li>
        )

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
                        style={{fontWeight: isMobile ? 700 : 400}}
                    >
                        {isMobile ? `MK` : `Michał Kotowski`}
                    </Link>
                    <div className={style.actions}>
                        <ul className={style.navigation}>
                            <ListLink to="/thoughts/">thoughts</ListLink>
                            <ListLink to="/about/">about</ListLink>
                        </ul>
                        <input type="checkbox" className={style.checkbox} id="toggle" name="toggle" onClick={toggleDarkMode}></input>
                        <label htmlFor="toggle" className={style.toggle}></label>
                    </div>
                </div>
            </header>
        )
    }
}