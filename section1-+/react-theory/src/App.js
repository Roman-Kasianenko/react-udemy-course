import React from 'react';
import './App.css';
import Car from "./Car/Car";

function App() {

  const divStyle = {
    textAlign: 'center'
  };

  return (
    <div className="App" style={divStyle}>
      <h1>Hello world</h1>
        <Car name={'Ford'} year={2018}/>
        <Car name={'AUDI'} year={2016}>
            <p style={{color: 'red'}}>Color</p>
        </Car>
        <Car name={'Mazda'} year={2002}/>
    </div>
  );
}

export default App;
