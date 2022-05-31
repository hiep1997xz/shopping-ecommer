import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Footer from './common/footer/Footer';
import Header from './common/header/Header';
import Pages from './pages/Pages';

function App() {
  return (
    <> 
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Pages />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
