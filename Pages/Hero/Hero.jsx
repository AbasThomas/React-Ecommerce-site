import React, { useEffect, useState } from 'react';
import './Hero.css';
import Button1 from '../../Components/Button2/Button2';
import Button2 from '../../Components/Button2/Button2';

const Hero = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <h2 style={{ paddingBottom: '20px', paddingTop: '15px' }}>All Products</h2>

      {/* Search Box */}
      <div className="search-box">
        <div style={{ display: 'flex', gap: '10px', paddingBottom: '15px' }}>
          <h4>Search Box</h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </div>
        <input type="text" placeholder="Enter product name or description" className="search-input" />
      </div>

      {/* Products Section */}
      <div className="products">
        <h1>FakeStore Products</h1>
        <div className="product-cont">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              
              <div className="action_cont">
                <div className="product-info">
                  <h4>{product.title}</h4>
                  <p>${product.price} - In Stock</p>
                </div>
                
                <div className="action-btn">
                  <Button1 className="cart-btn">
                    Add to cart <img src="src/assets/add-to-cart.svg" alt="Cart" className="btn-action" />
                  </Button1>

                  <Button2 className="btn2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="#634AFF" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round" className="action">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </Button2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
