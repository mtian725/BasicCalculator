
class Calculator extends React.Component {
  render() {
    return (
      <div>
        <div className="screen">
          <p>something</p>
        </div>
        <div className="items">
          <button type="button" className="special-func">C</button>
          <button type="button" className="special-func">+/-</button>
          <button type="button" className="special-func">%</button>
          <button type="button" className="func">/</button>

          <button type="button" className="num">7</button>
          <button type="button" className="num">8</button>
          <button type="button" className="num">9</button>
          <button type="button" className="func">x</button>

          <button type="button" className="num">4</button>
          <button type="button" className="num">5</button>
          <button type="button" className="num">6</button>
          <button type="button" className="func">-</button>

          <button type="button" className="num">1</button>
          <button type="button" className="num">2</button>
          <button type="button" className="num">3</button>
          <button type="button" className="func">+</button>

          <button type="button" className="num-z">0</button>
          <button type="button" className="decimal">.</button>
          <button type="button" className="func-b">=</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('calculator')
);
