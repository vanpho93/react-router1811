import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { About } from './components/About';
import { Topics } from './components/Topics';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import { AuthRoute, NotAuthRoute } from './components/MyRoutes';

import { User } from './components/User';
import { SignIn } from './components/SignIn';

class App extends Component {
  render() {
    const user = { name: 'a' };
    return (
      <Router>
        <div>
          <Nav />
          <Route path="/" component={Home} exact />
          <Route path="/topics" component={Topics} />
          <Route path="/about" component={About} />
          <AuthRoute path="/user" component={User} user={user} />
          <NotAuthRoute path="/sign-in" component={SignIn} user={user} />
        </div>
      </Router>
    );
  }
}

export default App;
