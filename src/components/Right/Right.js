import React from 'react';
import "./Right.css"

const Right = (props) => {
    const { cart } = props
    let total = 0;
    for (const product of cart) {
        total = total + product.salary;
    }

    return (
        <div className='right-container'>
            <h4>Players Added : {props.cart.length} </h4>

            <h6>Total Cost : {total} </h6>
            {
                cart.map(n => <li>{n.name}</li>)
            }
        </div>
    );
};

export default Right;