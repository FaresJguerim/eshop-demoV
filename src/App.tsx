import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/home';
import Search from './Pages/Search/search';
import Favorite from './Pages/Favorite/favorite';
import Register from './Pages/Register/register';
import Login from './Pages/Login/login';
import Products from './Pages/Products/products';
import ProductDetails from './Pages/Productdetails/productDetails';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
