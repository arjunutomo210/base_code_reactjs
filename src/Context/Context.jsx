import React, { Component, createContext } from 'react';


// create store
const RootContext = createContext();

//HOC PROVIDER
const Provider = RootContext.Provider;
const GlobalProvider = (Children) => {
    return (
        class ParentComp extends Component {
            state = {
                totalOrder: 0
            }

            dispatch = (action) => {
                if (action.type === 'PLUS_ORDER') {
                    return this.setState({
                        totalOrder: this.state.totalOrder + 1
                    })
                }
                if (action.type === 'MINUS_ORDER') {
                    return this.setState({
                        totalOrder: this.state.totalOrder - 1
                    })


                }
            }
            render() {
                return (
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {...this.props} />
                    </Provider>
                )
            }
        }
    )
}
export default GlobalProvider;


//HOC CONSUMER
const Consumer = RootContext.Consumer;
export const GobalConsumer = (Children) => {
    return (
        class ParentConsumer extends Component {
            render() {
                return (
                    <Consumer>
                        {
                            value => {
                                return(
                                    <Children {...this.props} {...value} />
                                )
                            }
                        }

                    </Consumer>
                )
            }
        }


    )
}

