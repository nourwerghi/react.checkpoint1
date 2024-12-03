import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';  // Import the CSS file

import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import products from './product';

const App = () => {
  const firstName = "Nour"; // Replace with your name if needed

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">The Latest Apple Products</h1>
      <div className="row justify-content-center">
        {products.map((product, index) => (
          <div key={index} className="col-md-4">
            <div className="card text-center p-3 shadow product-card">
              <Image image={product.image} name={product.name} />
              <div className="card-body">
                <Name name={product.name} />
                <Price price={product.price} />
                <Description description={product.description} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 text-center">
        <h4>
          Hello, {firstName ? firstName : "there"}!
        </h4>
        {firstName && (
          <img
            src="data:image/jpeg;base64,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"
            alt="Profile Placeholder"
            className="mt-2 rounded-circle"
          />
        )}
      </div>
    </div>
  );
};

export default App;
