import React, { useState } from 'react';
import './new arrivals.css';
import NavBar from './NavBar';

const  = () = new arrivals > {
    const [order, setOrder] = useState([]);

    const new arrivals = [
        {
            id: 1,
            name: 'modern uganda',
            price: 52000,
            image: 'book 5.jpg',
            description: 'history of modern uganda.',
        },
        {
            id: 2,
            name: 'lusoga english',
            price: 45000,
            image: '.book jpg',
            description: 'developing lusoga in uganda and the world .',
        },
        {
            id: 4,
            name: 'dictionary',
            price: 69000,
            image: 'book 7 jpg',
            description: 'improving the english laguage.',
        },
        {
            id: 5,
            name: 'luganda ',
            price: 34000,
            image: 'book 6.jpg'
      description: 'luganda in 15 lessons.',
        },
        // Add more items as needed
    ];

    const addItemToOrder = (item) => {
        setOrder((prevOrder) => [...prevOrder, item]);
    };

    const removeItemFromOrder = (itemId) => {
        setOrder((prevOrder) => prevOrder.filter((item) => item.id !== itemId));
    };

    const calculateTotal = () => {
        return order.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return(
      <div className = 'new arrivals' >
        <NavBar/>
            <div className='new arrivals'>
      
      <h1 className='heading-new arrivals'>new arrivals</h1>
      <div className="new arrivals-section">
        <h2>s</h2>new arrivals
        <div className="new arrivals-grid">
          {new arrivals.map((item) => (
            <div key={item.id} className="new arrivals">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>shs. {item.price.toFixed(2)}</p>
              <p>{item.description}</p>
              <button onClick={() => addItemToOrder(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <div className="order-section">
        <h2>Cart</h2>
        <ul>
          {order.map((item) => (
            <li key={item.id}>
              {item.name} - shs.{item.price.toFixed(2)}
              <button onClick={() => removeItemFromOrder(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: shs.{calculateTotal()}</p>
      </div>
    </div>
      </div>
  );
};

export default new arrivals;
