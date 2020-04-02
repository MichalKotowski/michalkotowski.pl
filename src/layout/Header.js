import React, { Component } from "react"
import { Link } from "gatsby"
import style from "../styles/layout/header.module.scss"

export default class Header extends Component {
    
    render() {
        const ListLink = props => (
            <li className={style.navigationItem}>
                <Link to={props.to}>{props.children}</Link>
            </li>
        )

        return (
            <header className={style.header}>
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