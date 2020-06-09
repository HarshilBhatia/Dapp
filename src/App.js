import React, { Component } from 'react';
import './App.css';
import logo from './logo.png'
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <span className="navbar-brand col-sm-3 col-md-2 mr-0">
            Harshil Bhatia
          </span>
        </nav>

        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
              <img src={logo} className="App-logo" alt="logo" style={{"width":1000}}/>

                <h1>Dapp Starter Kit</h1>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
