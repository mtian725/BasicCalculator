

class Num extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return <button type="button" className="num">{this.props.digit}</button>
  }
}

class Calculator extends React.Component {
  constructor (props) {
    super(props);
    this.state = { // will change state names to make it work with everything just val for now for testing purposes
      val: 0
    };
  }

  render () {
    return (
      <div>
        <div className="screen">
          <p>{this.state.val}</p>
        </div>
        <div className="items">
          <button type="button" className="special-func">C</button>
          <button type="button" className="special-func">+/-</button>
          <button type="button" className="special-func">%</button>
          <button type="button" className="func">/</button>

          <Num digit={7} />
          <Num digit={8} />
          <Num digit={9} />
          <button type="button" className="func">x</button>

          <Num digit={4} />
          <Num digit={5} />
          <Num digit={6} />
          <button type="button" className="func">-</button>

          <Num digit={1} />
          <Num digit={2} />
          <Num digit={3} />
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
