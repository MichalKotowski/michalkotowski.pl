import React from "react"
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group"
import style from "../styles/components/container.module.scss"

const timeout = 500
const getTransitionStyles = {
    exiting: {
        opacity: 0,
        transform: `translateX(40px)`,
    },
    exited: {

    },
    entering: {
    },
    entered: {
        opacity: 1,
        transform: `translateX(0)`,
    }
}

class Transition extends React.PureComponent {
    render() {
        const { children, location } = this.props
        return (
            <TransitionGroup>
                <ReactTransition
                    key={location.pathname}
                    timeout={{
                        enter: timeout,
                        exit: timeout,
                    }}
                >
                    {status => (
                        <div className={style.container}>
                            <div
                                className={style.transition}
                                style={{
                                    ...getTransitionStyles[status],
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                </ReactTransition>
            </TransitionGroup>
        )
    }
}

export default Transition