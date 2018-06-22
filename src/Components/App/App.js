import React, { Component } from 'react';
import Header from '../Header/Header'
import Home from '../Home/Home'

import Footer from '../Footer/Footer';
import Product from '../Product/Product';

class App extends Component {
  
  render() {
    return (
      <div>
        {/* inlcude Header page */}
        <Header />
        {/* include content home */}
        <div className="container">
          <Product />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
