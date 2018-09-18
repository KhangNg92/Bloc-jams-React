import React, { Component } from 'react';
import Album from './components/Album';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Library from './components/Library';


class App extends Component {
  render() {
    return (
      <div className="App" >
      <header>
        <nav1>
            <Link to='/' >Home</Link>
            </nav1>
            <nav>
            <Link to='/library'>Library</Link>
         
        </nav>
        <h1>Bloc Jams</h1>
      </header>
      <main>
        <Route exact path='/' component={Landing} />
        <Route path='/library' component={Library} />
        <Route path='/album/:slug' component={Album} />
        <div className ="web-dev">By Khang Nguyen</div>
      </main>
      
    </div>
    
  );
}
}
  

export default App;