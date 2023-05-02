import React from 'react';
import './style.css';

const products = [
  { id: 1, name: 'Product 1', price: 10, photo: 'https://greenleafonline.net/media/fresh-fruits.jpg', stock: '20'},
  { id: 2, name: 'Product 2', price: 20 , photo: 'https://greenleafonline.net/media/fresh-fruits.jpg', stock: '20'},
  { id: 3, name: 'Product 3', price: 30 ,photo: 'https://greenleafonline.net/media/fresh-fruits.jpg', stock: '20'},
  { id: 4, name: 'Product 4', price: 40 ,photo: 'https://greenleafonline.net/media/fresh-fruits.jpg' ,stock: '20'},
  { id: 5, name: 'Product 5', price: 50 ,photo: 'https://greenleafonline.net/media/fresh-fruits.jpg' ,stock: '20'},
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Product Dashboard</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <img src={product.photo} className='image' />
            <p>₹{product.price.toFixed(2)}</p>
            <p>Stock:{product.stock}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
