import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const Headline = () => {
  return <h1 className="title" >Hi everyone, this is my example PropTypes example !!! </h1>
}

const Greeting = (props) => {
  const {name, age} = props;
  return <p> My name is {name} {age}!</p>
}

function App() {
  return (
    <div className="App">
      <Headline />
      <Greeting name="Tincho" age={25} />
    </div>
  );
}

Greeting.prototype = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
