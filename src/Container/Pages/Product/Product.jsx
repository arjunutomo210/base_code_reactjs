import React, { Component, Fragment } from "react";
import CardProduct from './CardProduct/CardProduct';
// import {RootContext} from '../../Home/Home';
import './Product.css';
import { GobalConsumer } from "../../../Context/Context";

class Product extends Component {
    state = {
        order: 0
    }

    handleCounterChange = (newOrder) => {
        this.setState({
            order: newOrder
        }
        )
    }

    render() {
        return (
            <Fragment>
                <p>Halaman Product</p>
                <hr />
                <div className="header">
                    <div className="logo">

                    </div>
                    <div className="troley">
                        <img src="https://image.shutterstock.com/image-vector/trolley-logo-shopping-icon-buy-260nw-1103146715.jpg" />
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>

                </div>
                <CardProduct />
            </Fragment>

        )
    }
}

export default GobalConsumer(Product);