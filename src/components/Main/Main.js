import React, { useEffect, useState } from 'react';
import Left from '../Left/Left';
import Right from '../Right/Right';
import "./Main.css"
const Main = () => {
    const [cardsData, setCardsData] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("./data.JSON")
            .then(res => res.json())
            .then(data => setCardsData(data));
    }, [])
    const handleAddToCart = (item) => {
        const newCart = [...cart, item]
        setCart(newCart);
    }
    return (
        <div className='main'>
            <div className='main-container'>
                {
                    cardsData.map(data => <Left

                        key={data.id}
                        data={data}
                        handleAddToCart={handleAddToCart}

                    ></Left>)
                }
            </div>

            <Right
                cart={cart}
            ></Right>

        </div>

    );
};

export default Main;