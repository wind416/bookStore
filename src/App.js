import React, { Component } from 'react';

import { HashRouter, Route , Switch } from 'react-router-dom';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Home from './pages/IndexBookPage/index';
import Book from './pages/BookPage/index';
import ManagePage from './pages/ManagePages/index';
import SearchBookPage from './pages/SearchBookList/index'
import CommentBook from './pages/BookPage/components/BookMain/CommentBook'
import Person from './pages/PersonPage/index';
class App extends Component {

  render() {
    return (
    
        
        <HashRouter>
          <Header/>
            <Switch>
              <Route path="/person/:phone" component={Person}/>    
              <Route path="/manager" component={ManagePage}/>
              <Route path="/searchBOOK" component={SearchBookPage}/>
              <Route path="/book/commentBook/:oid" component={CommentBook}/>
              <Route path="/book/:id" component={Book}/>
              <Route path="/"  component={Home}/>
            
            </Switch>
  
          <Footer/>
        </HashRouter>
   
    );
  }
}

export default App;
