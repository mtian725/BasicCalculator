import React from 'react';
import ReactDOM from 'react-dom';
import '../styles.css';

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <div style="screen">
          <p>something</p>
        </div>
        <div style="items">
          <button style="temp-button">1</button>
          <button style="temp-button">2</button>
          <button style="temp-button">3</button>
          <button style="temp-button">4</button>
          <button style="temp-bottom-a">5</button>
          <button style="temp-bottom-b">6</button>
          <button style="temp-bottom-b">7</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('calculator')
);
