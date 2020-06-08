

class Num extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return <button type="button" className="num">{this.props.num}</button>
  }
}

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

          <Num num={7} />
          <Num num={8} />
          <Num num={9} />
          <button type="button" className="func">x</button>

          <Num num={4} />
          <Num num={5} />
          <Num num={6} />
          <button type="button" className="func">-</button>

          <Num num={1} />
          <Num num={2} />
          <Num num={3} />
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
