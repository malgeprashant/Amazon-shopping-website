// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header/Header';
import Home from './Home/Home';
import Checkout from './checkout/Checkout';


function App() {
  return (
    <Router>
      <div className="app">
          <Switch>
            <Route path='/Checkout'>
              <Header />
              <Checkout />
            </Route>


        <Route path='/login'>
          {/* <h1>login page</h1> */}
          <Header />

        </Route>



        {/* <This is default route> */}

        <Route path='/' element={<Home />}>
          <Header />
          <Home />
        </Route>
      </Switch>

    </div>
    </Router >




  );
}

export default App;
