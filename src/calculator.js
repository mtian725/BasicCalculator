import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <div class="screen">
          <p>something<p>
        </div>
        <div class="items">
          <button type="button" class="temp-button">1</button>
          <button type="button" class="temp-button">2</button>
          <button type="button" class="temp-button">3</button>
          <button type="button" class="temp-button">4</button>
          <button type="button" class="temp-bottom-a">5</button>
          <button type="button" class="temp-bottom-b">6</button>
          <button type="button" class="temp-bottom-b">7</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('calculator')
);
