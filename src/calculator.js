
class Calculator extends React.Component {
  render() {
    return (
      <div>
        <div className="screen">
          <p>something</p>
        </div>
        <div className="items">
          <button type="button" className="button-a">
            <div className="grey-button">C</div></button>
          <button type="button" className="button-a">
            <div className="grey-button">+/-</div></button>
          <button type="button" className="button-a">
            <div className="grey-button">%</div></button>
          <button type="button" className="button-a">
            <div className="orange-button">/</div></button>

          <div className="black-button">
            <button type="button" className="button-a">7</button>
            <button type="button" className="button-a">8</button>
            <button type="button" className="button-a">9</button>
          </div>
          <div className="orange-button">
            <button type="button" className="button-a">x</button>
          </div>

          <div className="black-button">
            <button type="button" className="button-a">4</button>
            <button type="button" className="button-a">5</button>
            <button type="button" className="button-a">6</button>
          </div>
          <div className="orange-button">
            <button type="button" className="button-a">-</button>
          </div>

          <div className="black-button">
            <button type="button" className="button-a">1</button>
            <button type="button" className="button-a">2</button>
            <button type="button" className="button-a">3</button>
          </div>
          <div className="orange-button">
            <button type="button" className="button-a">+</button>
          </div>

          <div className="black-button">
            <button type="button" className="b-bottom-a">0</button>
            <button type="button" className="b-bottom-b">.</button>
          </div>
          <div className="orange-button">
            <button type="button" className="b-bottom-b">=</button>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('calculator')
);
