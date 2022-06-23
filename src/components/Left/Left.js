
import React from 'react';
import "./Left.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Left = (props) => {
    // console.log(props);
    const { name, role, age, country, salary, img } = props.data;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div>
            <div className="card" >
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">Name : {name} </h6>
                    <h6 className="card-title">Role : {role} </h6>
                    <h6 className="card-title">Age : {age} </h6>
                    <h6 className="card-title">Country: {country} </h6>
                    <h6 className="card-title">SaLary: {salary} </h6>
                    <button onClick={()=>props.handleAddToCart(props.data)}  className='btn btn-secondary'> {element} Add to cart</button>
                    <FontAwesomeIcon icon="fa-brands fa-facebook" />
                    <br />
                    <span>
                        <i className=" fa fa-twitter"></i>
                    </span>
                    <span>
                        <i className=" fa fa-facebook"></i>
                    </span>

                </div>
            </div>
        </div>
    );
};

export default Left;