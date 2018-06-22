import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'

import Header from '../Header/Header'

import Footer from '../Footer/Footer';
import RouterURL from '../RouterURL/RouterURL';

class App extends Component {
  
  render() {
    return (
      <Router>
      <div>
        {/* inlcude Header page */}
        <Header />
        {/* include content home */}
        <div className="container">
          <RouterURL></RouterURL>
        </div>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
