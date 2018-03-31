import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { About } from './components/About';
import { Topics } from './components/Topics';
import { Home } from './components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home} exact />
          <Route path="/topics" component={Topics} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
