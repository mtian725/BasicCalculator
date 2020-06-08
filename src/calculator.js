
class Calculator extends React.Component {
  render() {
    return (
      <div>
        <div className="screen">
          <p>something</p>
        </div>
        <div className="items">
          <button type="button" className="temp-button">C</button>
          <button type="button" className="temp-button">+/-</button>
          <button type="button" className="temp-button">%</button>
          <button type="button" className="temp-button">/</button>
          <button type="button" className="temp-button">7</button>
          <button type="button" className="temp-button">8</button>
          <button type="button" className="temp-button">9</button>
          <button type="button" className="temp-button">x</button>
          <button type="button" className="temp-button">4</button>
          <button type="button" className="temp-button">5</button>
          <button type="button" className="temp-button">6</button>
          <button type="button" className="temp-button">-</button>
          <button type="button" className="temp-button">1</button>
          <button type="button" className="temp-button">2</button>
          <button type="button" className="temp-button">3</button>
          <button type="button" className="temp-button">+</button>
          <button type="button" className="temp-bottom-a">0</button>
          <button type="button" className="temp-bottom-b">.</button>
          <button type="button" className="temp-bottom-b">=</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('calculator')
);
