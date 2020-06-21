import React, { Component } from 'react';
import Counter from './Counter';


class CardProduct extends Component {

    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://s3-ap-southeast-1.amazonaws.com/etanee-images/product/A1101102.jpg" />
                </div>
                <p className="product-title">Daging Ayam Segar</p>
                <p className="product-price">Rp. 120000</p>
                <Counter onCounterChange={(value) => this.props.onCounterChange(value)}/>
                
            </div>

        )
    }

}

export default CardProduct;