import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';  // Import Navbar component

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts([...data.products]);
      });
  };

  console.log(products);

  if (products.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <Router>
      <Navbar /> {/* Include Navbar here */}
      <Routes>
        {/* Home Route: Show the products */}
        <Route
          path="/"
          element={
            <div className="main">
              <div className="smain">
                {products.map((product) => (
                  <div key={product.id} className="item">
                    <div className="image">
                      <img src={product.thumbnail} alt={product.title} />
                    </div>
                    <div className="conte">
                      <h3>{product.title}</h3>
                      <p className='p1'>Price: ${product.price}</p>
                      <p className='p2'>{product.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          }
        />
        
        {/* About Route */}
        <Route
          path="/about"
          element={<div><h2>About Us</h2><p>This is a product store app.</p></div>}
        />

        {/* Contact Route */}
        <Route
          path="/contact"
          element={<div><h2>Contact Us</h2><p>Contact information goes here.</p></div>}
        />
      </Routes>
    </Router>
  );
}

export default App;