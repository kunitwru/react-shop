import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Home from '../Home/Home';
import Product from '../Product/Product';
import Contact from '../Contact/Contact';
import Detail from '../Product/Detail';


export default class RouterURL extends Component {
  render() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/san-pham" component={Product} />
                <Route path="/lien-he" component={Contact} />
                <Route path="/chi-tiet/:id/:slug.html" component={Detail} />
                <Route component={Home} />
            </Switch>
        </div>
    )
  }
}
