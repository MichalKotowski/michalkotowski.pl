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
    state = {
        isLoaded: false,
    }

    componentDidUpdate() {
        setTimeout(() => {
            if ( this.props.isLoading === false && this.state.isLoaded === false ) {
                this.setState({isLoaded: true})
            }
        }, 500)
    }

    render() {
        const { children, location } = this.props
        const { isLoaded } = this.state
        
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
                        <div 
                            className={style.container}
                            style={{
                                opacity: isLoaded ? `1` : `0`,
                                transform: isLoaded ? `translateX(0)` : `translateX(-40px)`
                            }}
                        >
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