import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

=======
>>>>>>> f8ba34290b0b2dc95fe50c78b0449f78a02dad01
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
=======
>>>>>>> f8ba34290b0b2dc95fe50c78b0449f78a02dad01
       <header>
       <nav>
             <Link to='/'>Landing</Link>
             <Link to='/library'>Library</Link>
           </nav>
           <h1>Bloc Jams</h1>
         </header>
         <main>
         <Route exact path="/" component={Landing} /> {/* exact? By default, a route matches any path in the URL that begins with the value of the path prop*/}
           <Route path="/library" component={Library} />
           <Routh path="/album:slug" component={Album} />
         </main>
      </div>
    );
  }
}

export default App;
