import React from 'react';
import Navigation from './Navigation';
import CentralContainer from './CentralContainer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <CentralContainer />
    </div>
  );
}

export default App;
