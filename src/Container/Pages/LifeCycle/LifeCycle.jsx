import React, { Component, Fragment } from 'react';
// import { RootContext } from '../../Home/Home'
import './LifeCycle.css';
import { GobalConsumer } from '../../../Context/Context';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log("constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount");
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 3000)


    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        console.log("state awal: ", this.state);
        console.log("nest state: ", nextState);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {

        console.log("render");
        return (
            <Fragment>
                <p>Halaman LifeCycle</p>
                <hr />
                <button className="btn">Component Botton {this.state.count}</button>
                <hr />
                <p>Total Order : {this.props.state.totalOrder}</p>
            </Fragment>
        )
    }
}

export default GobalConsumer(LifeCycle);