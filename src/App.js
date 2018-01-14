import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Topic from './components/Topic';
import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
           <ul>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About</Link></li>
             <li><Link to="/topic">Topic</Link></li>
             <li><Link to="/contact">Contact</Link></li>
           </ul>
           <hr/>

          <Route exact path="/" component={ Home }/>
          <Route path="/about" component={ About }/>
          <Route path="/topic" component={ Topic }/>
          <Route path="/contact" component = { Contact }/>
        </div>
      </Router>
    );
  }
}

export default App;
