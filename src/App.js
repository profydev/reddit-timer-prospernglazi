import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/container/Home/Home';
import Search from './components/container/Search/Search';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
    </Router>
  );
}

export default App;
