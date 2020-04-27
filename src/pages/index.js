import React from "react"
import SEO from "../components/SEO"
import style from "../styles/pages/home.module.scss"

export default () => (
    <>
        <SEO title='Home' />
        <h4>
            I’m a web developer based in Warsaw <br></br>
            with experience across design, digital, print, and brand identity.
        </h4>
        <div className={style.columns}>
            <a href="https://github.com/michalkotowski" className={style.card} target="_blank" rel="noopener noreferrer">
                <h5>Website source</h5>
                <p><span>github.com/</span>MichalKotowski</p>
            </a>
            <a href="mailto:hello@michalkotowski.pl" className={style.card} target="_blank" rel="noopener noreferrer">
                <h5>Contact me at</h5>
                <p>hello@michalkotowski.pl</p>
            </a>
        </div>
    </>
)