import React, { useState, useEffect } from 'react';

import {
  getSomething
} from '../api';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    getSomething()
      .then(response => {
        setMessage(response.message);
      })
      .catch(error => {
        setMessage(error.message);
      });
  });

  return (
    <div className="App">
      <h1>Hello, World hi hi!</h1>
      <br>E wrote this</br>
      <h2>{ message }</h2>
    </div>
  );
}

export default App;