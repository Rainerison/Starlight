import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Grid from './Grid';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
        <div className="content">
          <Grid />
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;