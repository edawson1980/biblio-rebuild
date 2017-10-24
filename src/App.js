import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import axios from 'axios';
import {BrowserRouter as Router,
        Route,
        Link,
        Redirect
} from 'react-router-dom';
import './App.css';
import BooksContainer from './BooksContainer'

class App extends Component {

  render() {
    return (
      <Router>


      <div className="content">

        <header className="header">

          <h1 className="title">Welcome to Bookworm</h1>
          <h3>Improving literary access for District residents.</h3>

          <nav clasName="nav">
            <div className="nav-left">
              <a>Where To Read</a>
              <a>What To Read</a>
            </div>
          </nav>
        </header>

        <div className="container">
          <img className="jumbotron"src="http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/54/q9/p054q93q.jpg"  alt="books on a shelf"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              1 of 3
            </div>
          </div>

          <div className="row">
            <div className="col">
              2 of 3
            </div>
          </div>

          <div className="row">
            <div className="col">
              3 of 3
            </div>
          </div>

        </div>

        <div className="sidebar">
          <h3>Resources</h3>
        </div>

      </div>
    </Router>
    );
  }
}

export default App;
