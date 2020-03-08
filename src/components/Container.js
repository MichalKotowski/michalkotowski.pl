import React from "react"
import styles from "../styles/components/container.module.scss"

export default ({ children }) => (
    <div className={styles.container}>{children}</div>
)