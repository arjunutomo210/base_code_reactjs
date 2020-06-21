import React, { Component } from 'react';
// import { RootContext } from '../../../Home/Home';
import {GobalConsumer} from '../../../../Context/Context'

class Counter extends Component {
    state = {
        order: 0,
        price: 120000
    }

    render() {
        return (
            <div className="counter">
                <button className="minus" onClick={() => this.props.dispatch({ type: 'MINUS_ORDER' })}>-</button>
                <input type="text" value={this.props.state.totalOrder} />
                <button className="plus" onClick={() => this.props.dispatch({ type: 'PLUS_ORDER' })}>+</button>
            </div>
        )
    }
}

export default GobalConsumer(Counter);