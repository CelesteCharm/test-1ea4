import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handlePlus() {
    setCount(count + 1);
  }

  function handleMinus() {
    setCount(count - 1);
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to my app</h1>
      <br />
      <div style={styles.counter}>{count}</div>
      <button style={styles.button} onClick={handleMinus}>
        Minus
      </button>
      <button style={styles.button} onClick={handlePlus}>
        Plus
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
  },
  counter: {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    margin: '0 10px',
    cursor: 'pointer',
  },
};

export default App;
