

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

          <Num number={7} />
          <Num number={8} />
          <Num number={9} />
          <button type="button" className="func">x</button>

          <Num number={4} />
          <Num number={5} />
          <Num number={6} />
          <button type="button" className="func">-</button>

          <Num number={1} />
          <Num number={2} />
          <Num number={3} />
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
