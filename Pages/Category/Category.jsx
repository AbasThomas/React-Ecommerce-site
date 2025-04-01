import React, { useState, useEffect } from 'react';
import './Category.css';
import Button1 from '../../Components/Button2/Button2';
import Button2 from '../../Components/Button2/Button2';
import cartImg from '../../src/assets/add-to-cart.svg'; 
const Category = () => {
  const [products, setProducts] = useState([]);
  const categories = ["All Products", "electronics", "jewelery", "men's clothing", "women's clothing"];

  // Fetch products based on selected category
  const fetchProducts = (category) => {
    let url = category === "All Products"
      ? "https://fakestoreapi.com/products"
      : `https://fakestoreapi.com/products/category/${category}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  };

  // Load all products on first render
  useEffect(() => {
    fetchProducts("All Products");
  }, []);

  return (
    <div>
      <h2 style={{ paddingBottom: '20px' }}>Product Catalog with Filtering</h2>

      {/* Category Menu */}
      <div className="category">
        {categories.map((category) => (
          <div className="categ-items" key={category} onClick={() => fetchProducts(category)}>
            <li>{category}</li>
          </div>
        ))}
      </div>

      {/* Product Display */}
      <div className="products">
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          <div className="product-cont">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.title} className="product-image" />

                <div className="action_cont">
                  <div className="product-info">
                    <h4>{product.title}</h4>
                    <p>${product.price} - In Stock</p>
                  </div>

                  <div className="action-btn">
                    <Button1 className="cart-btn">
                      Add to cart <img src={cartImg} alt="Cart" className="btn-action" />
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
        )}
      </div>
    </div>
  );
};

export default Category;
