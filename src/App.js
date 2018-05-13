import React, { Component } from 'react';
import Album from './components/Album';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Library from './components/Library';


class App extends Component {
  render() {
    return (
      <div className="App">
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
           <Route path="/album/:slug" component={Album} />
         </main>
      </div>
    );
  }
}

export default App;