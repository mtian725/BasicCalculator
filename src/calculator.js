
import { Number } from './number';

class Calculator extends React.Component {
  constructor (props) {
    super(props);
    this.state = { // will change state names to make it work with everything just num for now for testing purposes
      num: 0
    };
  }

  render () {
    return (
      <div>
        <div className="screen">
          <p>{this.state.num}</p>
        </div>
        <div className="items">
          <button type="button" className="special-func">C</button>
          <button type="button" className="special-func">+/-</button>
          <button type="button" className="special-func">%</button>
          <button type="button" className="func">/</button>

          <Number number={7} />
          <Number number={8} />
          <Number number={9} />
          <button type="button" className="func">x</button>

          <Number number={4} />
          <Number number={5} />
          <Number number={6} />
          <button type="button" className="func">-</button>

          <Number number={1} />
          <Number number={2} />
          <Number number={3} />
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
