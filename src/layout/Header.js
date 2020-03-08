import React from "react"
import { Link } from "gatsby"
import style from "../styles/layout/header.module.scss"

const ListLink = props => (
    <li className={style.navigationItem}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default () => (
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