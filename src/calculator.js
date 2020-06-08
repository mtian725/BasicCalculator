import React from 'react';
import ReactDOM from 'react-dom';
import '../styles.css'

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <div className="screen">
          <p>something</p>
        </div>
        <div className="items">
          <button type="button" className="temp-button">1</button>
          <button type="button" className="temp-button">2</button>
          <button type="button" className="temp-button">3</button>
          <button type="button" className="temp-button">4</button>
          <button type="button" className="temp-bottom-a">5</button>
          <button type="button" className="temp-bottom-b">6</button>
          <button type="button" className="temp-bottom-b">7</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('calculator')
);
