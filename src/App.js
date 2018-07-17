import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import logo from './logo.svg';
import DashboardContainer from './components/dashboard-container'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      options: [],
      choice: '',
      modalOpen: false
    }

    this.getApp = this.getApp.bind(this);
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this)//this is in relation to app component
    }
  }

  componentDidUpdate(){ // every tiem we update this component, console log
    console.log('STATE__', this.state);
  }

  render() {
    return (
      <main>
        <h1> hello </h1>
        <BrowserRouter>
          <section>
            <Route exact path="/" component={() =>
            <DashboardContainer app={this.getApp()} /> } />
          </section>
        </BrowserRouter>
      </main>
    );
  }
}


//for browser routing in future


export default App;
