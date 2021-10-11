import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/container/Home/Home';
import Search from './components/container/Search/Search';

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
    </div>
  );
}

export default App;
