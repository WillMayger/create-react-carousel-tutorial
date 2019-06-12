import React from 'react';
import './App.css';
import Carousel from './carousel';

function App() {
  return (
    <div className="App">
      <Carousel>
        <img src="https://picsum.photos/id/100/500/500" />
        <img src="https://picsum.photos/id/200/500/500" />
      </Carousel>
    </div>
  );
}

export default App;
